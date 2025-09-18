import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar(){
  return (
    <div className="sticky top-6 space-y-4">
      <div className="flex items-center gap-3 p-3 bg-[var(--ig-card)] rounded-md">
        <img src="/images/avatars/avatar-1.png" className="w-12 h-12 rounded-full" alt="avatar" />
        <div>
          <div className="font-semibold">demo_user</div>
          <div className="text-sm text-[var(--ig-muted)]">Edit profile</div>
        </div>
      </div>

      <div className="p-3 bg-[var(--ig-card)] rounded-md">
        <div className="text-sm font-semibold mb-2">Suggestions for you</div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/images/avatars/avatar-2.png" className="w-8 h-8 rounded-full" />
              <div className="text-sm">foodie</div>
            </div>
            <button className="text-sm text-[var(--ig-accent)]">Follow</button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/images/avatars/avatar-3.png" className="w-8 h-8 rounded-full" />
              <div className="text-sm">citylife</div>
            </div>
            <button className="text-sm text-[var(--ig-accent)]">Follow</button>
          </div>
        </div>
      </div>

      <div className="text-xs text-[var(--ig-muted)]">
        © Demo • Frontend only • No backend
      </div>
    </div>
  )
}
