import React, { createContext, useEffect, useState } from "react";

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
  const [userId, setUserId] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [blogId, setBlogId] = useState('');
  const [showDelete, setShowDelete] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showBioModal, setShowBioModal] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);

  // console.log('this is the user', fistName)
  // console.log('this is the username', lastName)


  React.useEffect(() =>  {
    console.log('entered there')
    if(!email) return
    if(lastName !== '' && fistName !== '') return

    
    (async () => {
     console.log('i got here')
    const res = await fetch(`/api/register/?email=${email}`)
    console.log(res.status)
    const data = await res.json()
      // console.log(data)
    
      if(res.status === 200){
        setFirstName(data.firstName)
        setLastName(data.lastName)
        setUserId(data._id)
        setUsername(data.username)
        setBio(data.bio)
        setBookmarks(data.bookmarks)
      }
   })()

  }, [email])

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
    setFollowing,
    userId,
    setUserId,
    blogs,
    setBlogs,
    blogId,
    setBlogId,
    showDelete, 
    setShowDelete,
    showProfile,
    setShowProfile,
    showBioModal,
    setShowBioModal,
    bookmarks,
    setBookmarks
  };

  return (
    <UserContext.Provider value={pass_value}>{children}</UserContext.Provider>
  );
};
