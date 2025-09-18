import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import { load, save } from '../lib/storage'

export default function Profile({onOpenPost}) {
  const { username } = useParams()
  const [profile, setProfile] = useState(() => load('profile_'+username, {name: username, bio:'Hello!', avatar:'/images/avatars/avatar-1.png'}))
  const posts = load('posts_v2', []).filter(p => p.user === username)

  const onAvatar = (e) => {
    const f = e.target.files?.[0]
    if(!f) return
    const reader = new FileReader()
    reader.onload = ()=> {
      setProfile(p => { const n = {...p, avatar: reader.result}; save('profile_'+username, n); return n })
    }
    reader.readAsDataURL(f)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 bg-[var(--ig-card)] p-4 rounded-md">
        <img src={profile.avatar} className="w-24 h-24 rounded-full" alt=""/>
        <div>
          <div className="text-xl font-semibold">{profile.name}</div>
          <div className="text-sm text-[var(--ig-muted)]">{profile.bio}</div>
          <div className="mt-2">
            <label className="text-sm px-3 py-1 border rounded-md cursor-pointer">
              Change avatar
              <input type="file" className="hidden" onChange={onAvatar} accept="image/*"/>
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {posts.length ? posts.map(p=> <img key={p.id} src={p.image} className="w-full h-28 object-cover rounded-md" onClick={()=>onOpenPost(p)} />) : <div className="col-span-3 text-[var(--ig-muted)]">No posts</div>}
      </div>
    </div>
  )
}
