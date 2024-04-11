import { ChangeEvent, useEffect, useState } from 'react'

type Cat = {
  id: string
  url: string
  width: number
  height: number
}

const getExpenses = async (): Promise<Cat[]> => {
  const res = await fetch('http://localhost:3001/api/expenses')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const response = await res.json()
  return response
}

const RandomCatImage = () => {
  const [cat, setCat] = useState<Cat>()

  const fetchCat = async () => {
    const fetchedCat = await getExpenses()
    setCat(fetchedCat[0])
  }
  useEffect(() => {
    fetchCat()
  }, [])

  if (!cat) {
    return <p>Loading...</p>
  }

  return (
    <div className='m-10'>
      <div className='mb-4'>
        <p>Hello</p>
        <img alt='random cat image' src={cat.url} />
      </div>
    </div>
  )
}

export default RandomCatImage
