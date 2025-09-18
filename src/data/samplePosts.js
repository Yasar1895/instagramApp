// Small set of posts used as initial seed
const base = '/images'
export default [
  {
    id: 'p1',
    user: 'nature_luv',
    avatar: `${base}/avatars/avatar-1.png`,
    image: `${base}/photo-1.jpg`,
    caption: 'Sunset at the ridge • golden hour',
    likes: 128,
    createdAt: Date.now() - 1000*60*60*24,
    saved: false,
    comments: [{id:1, user:'anna', text:'Beautiful!'}]
  },
  {
    id: 'p2',
    user: 'foodie',
    avatar: `${base}/avatars/avatar-2.png`,
    image: `${base}/photo-2.jpg`,
    caption: 'Street bites in the old quarter 👨‍🍳',
    likes: 92,
    createdAt: Date.now() - 1000*60*60*48,
    saved: false,
    comments: []
  },
  {
    id: 'p3',
    user: 'citylife',
    avatar: `${base}/avatars/avatar-3.png`,
    image: `${base}/photo-3.jpg`,
    caption: 'City lights ✨',
    likes: 221,
    createdAt: Date.now() - 1000*60*60*72,
    saved: false,
    comments: []
  }
]
