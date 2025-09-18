import React, {useEffect, useState} from 'react'
import Stories from '../components/Stories'
import PostCard from '../components/PostCard'
import CreatePost from '../components/CreatePost'
import sample from '../data/samplePosts'
import { load, save } from '../lib/storage'

export default function Feed({onOpenPost}){
  const [posts, setPosts] = useState(()=>{
    return load('posts_v2', sample)
  })

  useEffect(()=> save('posts_v2', posts), [posts])

  // simulate new posts fetched when scrolling/refreshing (frontend-only)
  const loadMore = () => {
    const more = [
      {
        id: 'p'+Date.now(),
        user: 'random',
        avatar: '/images/avatars/avatar-4.png',
        image: '/images/photo-5.jpg',
        caption: 'New arrival demo',
        likes: 12,
        comments: []
      }
    ]
    setPosts(p => [...p, ...more])
  }

  return (
    <div className="space-y-6">
      <Stories />
      <CreatePost />
      <div className="space-y-4">
        {posts.map(p => <PostCard key={p.id} post={p} onOpen={onOpenPost} />)}
      </div>

      <div className="flex justify-center">
        <button onClick={loadMore} className="px-4 py-2 rounded-md border">Load more</button>
      </div>
    </div>
  )
}
