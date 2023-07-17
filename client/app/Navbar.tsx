import Link from 'next/link'
import React from 'react'
import { ptSansNarrow, ptSans } from './fonts'

type Props = {}

function Navbar({ }: Props) {
  const linkStyles = "cursor-pointer hover:text-white transition-color duration-200 ease-out"
  return (
    <header className="bg-pink-400 py-2">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className={`${ptSansNarrow.className} text-3xl ${linkStyles}`}>JamStack</Link>
        <ul className="flex gap-4">
          <li className={`text-lg font-bold ${ptSans.className} ${linkStyles}`}><Link href="#">Merch</Link></li>
          <li className={`text-lg font-bold ${ptSans.className} ${linkStyles}`}><Link href="#">Events</Link></li>
          <li className={`text-lg font-bold ${ptSans.className} ${linkStyles}`}><Link href="#">Blog</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
