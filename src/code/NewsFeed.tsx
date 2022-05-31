import React, { useState } from "react";
import InputForm from "./InputForm";
import PostList from "./PostList";
import { LocalData } from "../data/LocalData";
import { Post } from "../data/Post";

const NewsFeed = () => {
  
  const [posts, setPosts] = useState<Post[]>([]);
        
  
  function handleSubmit() {
    const result: Post[] = [...LocalData.getPosts()]
    setPosts(prevState => result)
  }
    
  

  return ( 
  <main className="news_feed">
    <InputForm onSubmit={handleSubmit}/>
    <PostList onDelete={handleSubmit} posts={posts} />
  </main>
  
  )
};

export default NewsFeed;
