import { createContext, useEffect, useState } from "react";

interface UserContextType {
  user: any;
}

export const UserContext = createContext<any>(null);

export const UserProvider: any = ({ children }: any) => {


  const [user, setUser] = useState<any>(null);
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [fistName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);


  const pass_value = {
    user,
    setUser,
    username,
    setUsername,
    bio, 
    setBio,
    fistName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    followers,
    setFollowers,
    following,
    setFollowing
  };

  return (
    <UserContext.Provider value={pass_value}>{children}</UserContext.Provider>
  );
};