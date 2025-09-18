import React from 'react'

export default function PostModal({post, onClose}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center" onClick={onClose}>
      <div className="w-full max-w-4xl bg-[var(--ig-card)] rounded-md overflow-hidden" onClick={(e)=>e.stopPropagation()}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,320px]">
          <div className="p-3">
            <img src={post.image} alt="" className="w-full max-h-[80vh] object-contain" />
          </div>
          <div className="p-4 border-l hidden lg:block">
            <div className="font-semibold">{post.user}</div>
            <div className="text-sm text-[var(--ig-muted)]">{post.caption}</div>
            <div className="mt-4">
              <div className="text-sm text-[var(--ig-muted)]">Comments</div>
              {(post.comments || []).map(c=> <div key={c.id} className="mt-2 text-sm"><strong>{c.user}</strong> {c.text}</div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
