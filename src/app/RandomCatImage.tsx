'use client'
import { ChangeEvent, useState } from "react";

const getRandomCat = async () => {
    const res = await fetch('https://api.thecatapi.com/v1/images/search')
    console.log(res)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const response = await res.json()
    console.log(2, response)
    return response
}

const RandomCatImage = () => {
    const [randomCat, setRandomCat] = useState(null)
    const setCat = async () => {
        const cat = await getRandomCat()
        console.log({ cat })
    
    }
    setCat()

    return (
        <div className="m-10">
            <div className="mb-4">
                <div>
                    <p>Hello</p>
                </div>

            </div>

        </div>
    )
}

export default RandomCatImage