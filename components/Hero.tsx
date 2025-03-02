import React from 'react'
import { Spotlight } from './ui/Spotlight'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen animate-spotlight' fill="blue"/>
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw] animate-spotlight' fill="purple"/>
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw] animate-spotlight' fill="green"/>
        </div>
    </div>
  )
}

export default Hero
