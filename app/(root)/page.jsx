import React from 'react'
import Hero from './Hero'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'

const page = () => {
    return (
        <main>
            <Hero />
            <About />
            <Blog />
            <Contact />
        </main>
    )
}

export default page