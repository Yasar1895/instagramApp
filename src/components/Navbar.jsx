import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'

export default function Navbar({theme, setTheme, onOpenPost}){
  const loc = useLocation()
  const toggle = () => setTheme(t => t === 'dark' ? 'light' : (t === 'light' ? 'system' : 'dark'))
  return (
    <header className="border-b bg-[var(--ig-card)]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-14">
        <div className="flex items-center gap-4">
          <Link to="/" className="font-semibold text-lg">InstaModern</Link>
          <nav className="hidden md:flex gap-3 text-sm text-[var(--ig-muted)]">
            <Link to="/" className={clsx(loc.pathname==='/' && 'text-[var(--ig-accent)]')}>Home</Link>
            <Link to="/explore" className={clsx(loc.pathname==='/explore' && 'text-[var(--ig-accent)]')}>Explore</Link>
            <Link to="/reels" className={clsx(loc.pathname==='/reels' && 'text-[var(--ig-accent)]')}>Reels</Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <input aria-label="Search" placeholder="Search" className="hidden sm:inline-block w-44 px-3 py-1 rounded-md border bg-transparent text-sm" />
          <button onClick={()=>onOpenPost({user:'you', image:'/images/photo-4.jpg', caption:'Draft'})} className="px-3 py-1 rounded-md border">Create</button>
          <button onClick={toggle} aria-label="Toggle theme" className="p-2 rounded-full border">
            {theme === 'dark' ? '🌙' : theme === 'light' ? '☀️' : '🌓'}
          </button>
          <Link to="/profile/demo" className="w-9 h-9 rounded-full overflow-hidden border">
            <img src="/images/avatars/avatar-1.png" alt="me" className="w-full h-full object-cover" />
          </Link>
        </div>
      </div>
    </header>
  )
}
