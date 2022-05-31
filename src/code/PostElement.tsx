import React, { useState } from 'react'
import liked from './liked.png'
import disliked from './disliked.png'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import { Property } from '../data/Property';

type ElementProps = {
    deletePost: any;
    id: string;
    author: string
    postDate: Date
    property: Property
    title: string
    body: string
    isLiked: boolean
    key: string,
}

export default function PostElement(props: ElementProps) {
  
  const [isLiked, setIsLiked] = useState(props.isLiked)
  
  const initials: string = props.author.split(" ").map(name => name[0]).join("")
 
  const id = props.id

  const handleLike = () => {
    setIsLiked(prevState => !prevState)
  }

  const options: object = {
    day: 'numeric',
    month: 'long',
    hour: 'numeric',
    minute: 'numeric'
  }
  
  const handleDelete = () => {
    props.deletePost(id)
  }


  return (
    <div className='post_element'>
      <header className='post_element--header'>
          <div className='post_element--initials'>
            <span >{initials} </span>
          </div>
          <div className='post_element--author'>
            <p className='post_element--author--name'>{props.author} </p>
            <p className='post_element--author--property'>{props.property.name}</p>
          </div>
        <div>
          <p className='post_element--date'>{props.postDate.toLocaleString('nb-NO', options)}</p>
        </div>
      </header>
      <h4 className='post_element--title'>{props.title}</h4>
      <textarea readOnly className='post_element--body' value={props.body}></textarea>
      <div className='post_element--like'>
        <input type="image" src={isLiked ? liked : disliked} className={'post_element--buttonliked'} onClick={handleLike}></input>
        <p className='post_element--numberlikes'>{isLiked ? "1 person liker" : "0 personer liker"}</p>
        <p className='post_element--comments'>0 kommentarer</p>
      </div>
        <Popup
          trigger={open => (<p className='post_element--settings'>Innstillinger</p>)}
          on='hover'
          position="bottom center"
          closeOnDocumentClick>
          <span className='post_element--deleteButton' onClick={handleDelete}> Delete post </span>
          </Popup>
        </div>
  )
}
