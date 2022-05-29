import { Post } from "./Post";
import { Property } from "./Property";

export class LocalData {

  private static posts: Post[] = []
  private static properties: Property[] = [{ name: "Bygg 1" }, { name: "Bygg 2" }, { name: "Bygg 3" }]

  static savePost(title: string, body: string, property: Property): Promise<Post> {
    return new Promise(resolve => {
      setTimeout(() => {
        const post: Post = {
          author: "Kristoffer Lundquist",
          title: title,
          body: body,
          property: property,
          postDate: new Date(),
          isLiked: false
        }
        this.posts.push(post)
        resolve(post)
      }, 3000)
    })
  }

  static getPosts(): Post[] {
    return this.posts;
  }

  static getProperties(): Property[] {
    return this.properties
  }

}