import { Property } from "./Property";

export interface Post {
  author: string
  postDate: Date
  property: Property
  title: string
  body: string
  isLiked: boolean
}