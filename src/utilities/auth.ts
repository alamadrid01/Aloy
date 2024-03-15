import GoogleProvider from "next-auth/providers/google";

const clientId = process.env.GOOGLE_CLIENT_ID || '';
const clientSecret = process.env.GOOGLE_CLIENT_SECRET || '';

console.log(clientId, clientSecret);

if (!process.env.GOOGLE_CLIENT_ID) {
  throw new Error('GOOGLE_CLIENT_ID is not set');
}
if (!process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error('GOOGLE_CLIENT_SECRET is not set');
}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId,
      clientSecret
    }),
  ],
  database: process.env.MONGODB_URI,
  secret: process.env.SECRET,
  callbacks: {
    async signIn({ user, account, profile }: any) {
      const response = await fetch(`http://localhost:3000/api/register?email=${profile.email}`);
      const data = await response.json();

      if (data.message !== "User not found") {
        return true;
      } else {
        const data = {
          firstName: profile.given_name,
          lastName: profile.family_name,
          email: profile.email,
          password: profile.at_hash,
          avatar: profile.picture,
        };

        const createUserResponse = await fetch("http://localhost:3000/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (createUserResponse.status !== 201) {
          return false;
        }
        return true;
      }
    },
  },
};
