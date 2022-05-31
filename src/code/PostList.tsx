import React from 'react'
import { LocalData } from '../data/LocalData'
import { Post } from '../data/Post'
import PostElement from './PostElement'




/* Burde nok ikke ha any */
export default function PostList(props: any) {


    const handleDeletePost = (id: string) => {
        var post: Post = props.posts.filter((p: Post) => p.id === id)[0]
        console.log(post)
        LocalData.deletePost(post)
        props.onDelete()
        loadPosts()
    }

    const loadPosts = () => {
        console.log("Loading posts...")
        return props.posts.map((newPost: Post) => (
            <PostElement {...newPost} deletePost={handleDeletePost} key={newPost.id}  />
        ))
    }




  return (
    <div>
        <p className='post_list--numInnlegg'>{props.posts.length + " innlegg"}</p>
        <ul className='post_list'>
           {loadPosts()}
        </ul>
    </div>
  )
}
