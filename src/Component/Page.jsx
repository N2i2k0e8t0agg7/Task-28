import React, { useState } from 'react'
import img from "../assets/img.jpg"

const Page = ({ Prop }) => {

    const defaultCard = (id) => ({
        id: id,
        name: `Card ${id}`,
        desc: `This is card ${id} description`,
        img: img
    })
    const createSequentialCards = (cards) => {
        const maxId = Math.max(...cards.map(card => card.id))
        const finalCards = []
        for (let i = 1; i <= maxId; i++) {
            const existingCard = cards.find(
                card => card.id === i
            )
            if (existingCard) {
                finalCards.push(existingCard)
            } else {
                finalCards.push(defaultCard(i))
            }
        }
        return finalCards
    }

    let Cards;

    if (Prop) {
        Cards = createSequentialCards(Prop)
    } else {
        Cards = [
            { id: 1, name: "Card 1", desc: "This is card 1 description", img: img },
            { id: 2, name: "Card 2", desc: "This is card 2 description", img: img },
            { id: 3, name: "Card 3", desc: "This is card 3 description", img: img },
            { id: 4, name: "Card 4", desc: "This is card 4 description", img: img },
            { id: 5, name: "Card 5", desc: "This is card 5 description", img: img },
            { id: 6, name: "Card 6", desc: "This is card 6 description", img: img },
            { id: 7, name: "Card 7", desc: "This is card 7 description", img: img },
            { id: 8, name: "Card 8", desc: "This is card 8 description", img: img },
            { id: 9, name: "Card 9", desc: "This is card 9 description", img: img },
            { id: 10, name: "Card 10", desc: "This is card 10 description", img: img },
            { id: 11, name: "Card 11", desc: "This is card 11 description", img: img },
            { id: 12, name: "Card 12", desc: "This is card 12 description", img: img },
        ]
    }

    return (
        <>
            <h1 className='text-blue-300 text-center p-12 text-xl'>All the Cards are here.</h1>

            <div className="grid grid-cols-3 text-white pl-30 pr-30 pt-10 pb-10 gap-20">
                {Cards.map(element => (
                    <div key={element.id} className='animation-gradient p-0.5 size-70'>
                        <div className='bg-black flex flex-col justify-evenly items-center h-full'>
                            <img src={element.img} alt="img" className='size-30' />
                            <p className='text-blue-300'>{element.name}</p>
                            <p className='text-blue-300 text-center'>{element.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Page