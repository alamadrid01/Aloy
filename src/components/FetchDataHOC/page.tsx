'use client'

import { UserContext } from "@/context/context";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import PageSkeleton from "../LoadingSkeleton/RegisterSkeleton/page";

const FetchDataHOC = (WrappedComponent: any) => {

    const WithDataFetching = (props: any) => {
        const [loading, setLoading] = useState(true);
        const [dataFetched, setDataFetched] = useState(false); // New state
        const [error, setError] = useState(false);
        // const [user, setUser] = useState<any>(null);

        const { user, setFirstName, setLastName, setBio, setFollowers, setFollowing } = useContext(UserContext);
        const { push } = useRouter();

        const {data: session, status} =  useSession();

        if(status == "unauthenticated"){
          window.location.assign("/login")
        }

        useEffect(() => {
            if(!user) return;

            (async () => {
                const response = await fetch(`/api/register?email=${user.email}`);
                const data = await response.json();

                if(response.status === 200){
                    setDataFetched(true);
                    setLoading(false);
                    setFirstName(data[0].firstName);
                    setLastName(data[0].lastName);
                    setBio(data[0].bio);
                    setFollowers(data[0].followers);
                    setFollowing(data[0].following);
                } else {
                    setError(true);
                }
            })();
        }, [user]);

        return loading ? <PageSkeleton /> : <WrappedComponent {...props} loading={loading} dataFetched={dataFetched} error={error} />;
}

WithDataFetching.displayName = `WithDataFetching(${getDisplayName(
    WrappedComponent
  )})`;

  return WithDataFetching;
};

const getDisplayName = (WrappedComponent: any) => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

export default FetchDataHOC;