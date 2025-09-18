import React, {useState, useRef, useEffect} from 'react'

export default function ReelsPlayer({items = []}) {
  const [i, setI] = useState(0)
  const ref = useRef(null)
  useEffect(()=> {
    const id = setInterval(()=> setI(v => (v+1) % items.length), 3800)
    return ()=> clearInterval(id)
  }, [items.length])

  return (
    <div className="h-[70vh] grid place-items-center bg-[var(--ig-card)] rounded-md">
      {items.length ? (
        <div className="w-full max-w-md text-center">
          <img src={items[i].thumb} alt="" className="w-full h-[60vh] object-cover rounded-md" />
          <div className="mt-3 flex items-center justify-between">
            <div>
              <div className="font-semibold">{items[i].user}</div>
              <div className="text-sm text-[var(--ig-muted)]">{items[i].caption}</div>
            </div>
            <div>
              <button className="px-3 py-1 rounded-md border">Like</button>
            </div>
          </div>
        </div>
      ) : <div>No reels</div>}
    </div>
  )
}
