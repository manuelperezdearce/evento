'use client'
import { useParams } from 'next/navigation'

export default function UserDetail () {
  const { id } = useParams()

  return (
    <>
      <div className='info'>
        <h1>informacion</h1>
      </div>
      <div className='favorites'>favoritos</div>
    </>
  )
}
