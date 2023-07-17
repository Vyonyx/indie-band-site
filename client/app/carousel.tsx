"use client"

import React, { useState } from "react";

export type Album = {
  title: string;
  year: number | null;
  image: string;
  listenHere?: string[];
};

type Props = {
  albums: Album[];
};

function Carousel({ albums }: Props) {
  const [albumData, setAlbumData] = useState<Album>({
    title: 'Albums',
    year: null,
    image: albums[0].image || '',
    listenHere: []

  })

  return (
    <article>
      <div
        className="w-full overflow-x-scroll py-2"
        style={{ scrollbarWidth: 'thin' }}
      >
        <ul className="w-fit min-w-full flex justify-center items-center bg-pink-300 gap-10 p-8">
          {albums.map((album, idx) => (
            <li key={idx}>
              <AlbumCard
                currentTitle={albumData.title}
                album={album}
                handleAlbumChange={setAlbumData}
              />
            </li>
          ))}
        </ul>
      </div>

      {(albumData.title && albumData.year) && (
        <div className="mt-8">
          <h1 className="text-2xl text-center">{albumData.title} - [{albumData.year}]</h1>
        </div>
      )}
    </article>
  )
}

type AlbumProps = {
  album: Album;
  handleAlbumChange: React.Dispatch<React.SetStateAction<Album>>
  currentTitle?: string;
};

function AlbumCard({ album, handleAlbumChange, currentTitle }: AlbumProps) {
  const { title, year, image, listenHere } = album;
  const [hover, setHover] = useState(false)

  function handleMouseEnter() {
    setHover(true)
    handleAlbumChange({
      title,
      year,
      image,
      listenHere
    })
  }

  function handleMouseLeave() {
    setHover(false)
  }

  return (
    <div
      className={`w-60 aspect-square bg-cover z-10 shadow-pink-500 shadow-lg cursor-pointer ease-in-out duration-300 ${title == currentTitle ? 'border-8 border-neutral-800 scale-110 shadow-inner shadow-neutral-700' : ''}`}
      style={{ backgroundImage: `url(${image})` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
    </div>
  );
}

export default Carousel;
