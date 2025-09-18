import React, { useEffect, useRef, useState } from 'react'

const stories = [
  { id: 's1', user: 'alice', avatar: '/images/avatars/avatar-1.png', img:'/images/photo-1.jpg'},
  { id: 's2', user: 'bob', avatar: '/images/avatars/avatar-2.png', img:'/images/photo-2.jpg'},
  { id: 's3', user: 'carla', avatar: '/images/avatars/avatar-3.png', img:'/images/photo-3.jpg'}
]

export default function Stories(){
  const [active, setActive] = useState(null)
  const timerRef = useRef(null)

  useEffect(()=> {
    if(active){
      timerRef.current = setTimeout(()=> setActive(null), 5000)
      return ()=> clearTimeout(timerRef.current)
    }
  }, [active])

  return (
    <div className="bg-[var(--ig-card)] p-3 rounded-md">
      <div className="flex gap-3 overflow-auto">
        <div className="min-w-[72px] text-center">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-pink-400 to-yellow-400 flex items-center justify-center text-white">+</div>
          <div className="text-xs text-[var(--ig-muted)]">Your Story</div>
        </div>

        {stories.map(s=> (
          <button key={s.id} className="min-w-[72px] text-center" onClick={()=>setActive(s)}>
            <img src={s.avatar} className="w-14 h-14 rounded-full ring-2 ring-gradient object-cover" alt={s.user}/>
            <div className="text-xs text-[var(--ig-muted)]">{s.user}</div>
          </button>
        ))}
      </div>

      {active && (
        <div className="mt-3 p-3 bg-[var(--ig-card)] rounded-md">
          <div className="flex items-center gap-3">
            <img src={active.avatar} className="w-10 h-10 rounded-full" alt=""/>
            <div>
              <div className="font-semibold">{active.user}</div>
              <div className="text-sm text-[var(--ig-muted)]">5h</div>
            </div>
          </div>
          <img src={active.img} alt="" className="mt-3 w-full h-64 object-cover rounded-md" />
        </div>
      )}
    </div>
  )
}
