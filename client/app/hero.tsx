import React from 'react'
import { ptSansNarrow } from './fonts'

type Props = {}

function Hero({ }: Props) {
  return (
    <section className='bg-neutral-300'>
      <div className='container h-[50vh] mx-auto flex justify-center items-center'>
        <h1 className={`text-2xl lg:text-4xl text-center ${ptSansNarrow.className}`}>Hero</h1>
      </div>
    </section>
  )
}

export default Hero
