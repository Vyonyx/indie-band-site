import React from 'react'
import { ptSansNarrow } from './fonts'

type Props = {}

function Hero({ }: Props) {
  return (
    <section className='bg-[url(https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)] bg-cover bg-center'>
      <div className='container mx-auto flex h-[50vh] items-center justify-center'>
        <h1 className={`text-2xl lg:text-4xl text-center text-white ${ptSansNarrow.className}`}>JamStack</h1>
      </div>
    </section>
  )
}

export default Hero
