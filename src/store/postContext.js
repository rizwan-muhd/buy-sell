import { createContext, useState } from "react";

export const postDetailsContext = createContext(null);

function PostDetails({ children }) {
  const [post, setPost] = useState([]);
  return (
    <postDetailsContext.Provider value={{ post, setPost }}>
      {children}
    </postDetailsContext.Provider>
  );
}

export default PostDetails;
