import React, {useEffect, useState} from 'react'
import MasonryGrid from '../components/MasonryGrid'
import sample from '../data/samplePosts'
import { load } from '../lib/storage'

export default function Explore({onOpenPost}) {
  const [items, setItems] = useState(()=> load('explore_v1', sample))

  useEffect(()=> {
    // lazy infinite append simulation
    const onScroll = () => {
      if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 200){
        setItems(prev => [...prev, ...prev.slice(0,6).map((x,i)=> ({...x, id: x.id + '-m'+i }))])
      }
    }
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Explore</h2>
      <MasonryGrid items={items} onOpen={onOpenPost} />
    </div>
  )
}
