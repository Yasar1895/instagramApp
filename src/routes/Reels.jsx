import React from 'react'
import ReelsPlayer from '../components/ReelsPlayer'

export default function Reels(){
  const reels = [
    { id:'r1', user:'creator1', thumb:'/images/photo-6.jpg', caption: 'Short demo #1' },
    { id:'r2', user:'creator2', thumb:'/images/photo-1.jpg', caption: 'Short demo #2' }
  ]
  return (
    <div>
      <h2 className="text-xl mb-4">Reels</h2>
      <ReelsPlayer items={reels} />
    </div>
  )
}
