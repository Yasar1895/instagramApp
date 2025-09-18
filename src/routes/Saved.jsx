import React from 'react'
import { load } from '../lib/storage'
import MasonryGrid from '../components/MasonryGrid'

export default function Saved({onOpenPost}) {
  const saved = load('posts_v2', []).filter(p=>p.saved)
  return (
    <div>
      <h2 className="text-xl mb-4">Saved</h2>
      {saved.length ? <MasonryGrid items={saved} onOpen={onOpenPost} /> : <div className="text-[var(--ig-muted)]">No saved posts yet</div>}
    </div>
  )
}
