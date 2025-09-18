import React, {useState} from 'react'
import clsx from 'clsx'
import { save, load } from '../lib/storage'
import { uid } from '../lib/utils'

export default function PostCard({post, onOpen}) {
  const [liked, setLiked] = useState(!!post.liked)
  const [likes, setLikes] = useState(post.likes || 0)
  const [saved, setSaved] = useState(!!post.saved)
  const [comments, setComments] = useState(post.comments || [])

  const toggleLike = () => {
    setLiked(v=>!v)
    setLikes(l => !liked ? l+1 : l-1)
    // persist to storage: naive patch
    const posts = load('posts_v2', [])
    const i = posts.findIndex(p => p.id === post.id)
    if(i>-1){
      posts[i].liked = !liked
      posts[i].likes = !liked ? post.likes+1 : post.likes
      save('posts_v2', posts)
    }
  }

  const addComment = (text) => {
    if(!text) return
    const c = {id: uid(), text, user: 'you'}
    setComments(prev => [...prev, c])
    // persist...
  }

  const toggleSave = () => {
    setSaved(s=>!s)
    // update storage...
  }

  return (
    <article className="bg-[var(--ig-card)] rounded-md overflow-hidden shadow-sm">
      <header className="flex items-center gap-3 p-3">
        <img src={post.avatar} className="w-10 h-10 rounded-full" alt="" />
        <div>
          <div className="font-semibold">{post.user}</div>
          <div className="text-xs text-[var(--ig-muted)]">Location • Demo</div>
        </div>
      </header>

      <div>
        <img src={post.image} alt={post.caption} loading="lazy" className="w-full object-cover max-h-[600px]" />
      </div>

      <div className="p-3 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={toggleLike} aria-pressed={liked} className="text-xl">{liked ? '❤️' : '🤍'}</button>
            <button onClick={()=>{}} className="text-xl">💬</button>
            <button onClick={()=>onOpen(post)} className="text-xl">✈️</button>
          </div>
          <button onClick={toggleSave} className="text-sm">{saved ? 'Saved' : 'Save'}</button>
        </div>

        <div className="text-sm font-semibold">{likes} likes</div>
        <div className="text-sm"><strong>{post.user}</strong> {post.caption}</div>

        <div className="pt-2">
          {comments.slice(0,2).map(c=> <div key={c.id} className="text-sm text-[var(--ig-muted)]">{c.user}: {c.text}</div>)}
        </div>

        <form onSubmit={(e)=>{
          e.preventDefault()
          const val = e.target.elements.comment.value.trim()
          if(!val) return
          addComment(val)
          e.target.reset()
        }} className="flex gap-2">
          <input name="comment" className="flex-1 rounded-md border px-3 py-2 text-sm" placeholder="Add a comment..." />
          <button type="submit" className="text-[var(--ig-accent)]">Post</button>
        </form>
      </div>
    </article>
  )
}
