'use client'
import { Container } from '@mui/system'
import { useParams } from 'next/navigation'

export default function UserDetail () {
  const { id } = useParams()

  return (
    <Container>
      <h1>event with id:{id}</h1>
    </Container>
  )
}
