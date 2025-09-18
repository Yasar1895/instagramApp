import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Feed from './routes/Feed'
import Explore from './routes/Explore'
import Profile from './routes/Profile'
import Reels from './routes/Reels'
import Saved from './routes/Saved'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import PostModal from './components/PostModal'
import { load, save } from './lib/storage'

export default function App(){
  const [theme, setTheme] = useState(() => load('theme','system'))
  useEffect(()=> {
    // apply theme
    if(theme === 'dark') document.documentElement.classList.add('dark')
    else if(theme === 'light') document.documentElement.classList.remove('dark')
    else {
      // system
      if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')
    }
    save('theme', theme)
  }, [theme])

  const [modalPost, setModalPost] = useState(null)

  return (
    <div className="min-h-screen bg-[var(--ig-bg)] text-[var(--ig-text)]">
      <Navbar theme={theme} setTheme={setTheme} onOpenPost={(p)=>setModalPost(p)} />
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-6 py-6">
        <main className="space-y-6">
          <Routes>
            <Route path="/" element={<Feed onOpenPost={(p)=>setModalPost(p)} />} />
            <Route path="/explore" element={<Explore onOpenPost={(p)=>setModalPost(p)} />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/saved" element={<Saved onOpenPost={(p)=>setModalPost(p)} />} />
            <Route path="/profile/:username" element={<Profile onOpenPost={(p)=>setModalPost(p)} />} />
          </Routes>
        </main>

        <aside className="hidden lg:block">
          <Sidebar />
        </aside>
      </div>

      {modalPost && <PostModal post={modalPost} onClose={()=>setModalPost(null)} />}
    </div>
  )
}
