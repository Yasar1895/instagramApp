import React from 'react'

export default function MasonryGrid({items = [], onOpen}) {
  return (
    <div className="columns-2 md:columns-3 gap-4 space-y-4">
      {items.map(it => (
        <div key={it.id} className="break-inside-avoid rounded-md overflow-hidden bg-[var(--ig-card)]" onClick={()=>onOpen(it)}>
          <img src={it.image} alt={it.caption} className="w-full object-cover" loading="lazy" />
        </div>
      ))}
    </div>
  )
}
