import React, {useState} from 'react'
import { save, load } from '../lib/storage'
import { uid } from '../lib/utils'

export default function CreatePost(){
  const [file, setFile] = useState(null)
  const [caption, setCaption] = useState('')
  const onFile = (e) => {
    const f = e.target.files?.[0]
    if(!f) return
    const reader = new FileReader()
    reader.onload = () => setFile(reader.result)
    reader.readAsDataURL(f)
  }

  const create = () => {
    const posts = load('posts_v2', [])
    posts.unshift({
      id: 'p'+uid(),
      user: 'you',
      avatar: '/images/avatars/avatar-1.png',
      image: file || '/images/photo-4.jpg',
      caption,
      likes: 0,
      createdAt: Date.now(),
      comments: []
    })
    save('posts_v2', posts)
    setCaption('')
    setFile(null)
    // optionally show toast
  }

  return (
    <div className="p-4 bg-[var(--ig-card)] rounded-md space-y-3">
      <div className="text-lg font-semibold">Create Post</div>
      <div>
        <input type="file" accept="image/*" onChange={onFile} />
      </div>
      {file && <img src={file} alt="preview" className="w-full h-48 object-cover rounded-md" />}
      <textarea value={caption} onChange={(e)=>setCaption(e.target.value)} placeholder="Write a caption..." className="w-full rounded-md border p-2" />
      <div className="flex justify-between">
        <div />
        <button onClick={create} className="bg-[var(--ig-accent)] text-white px-4 py-2 rounded-md">Share</button>
      </div>
    </div>
  )
}
