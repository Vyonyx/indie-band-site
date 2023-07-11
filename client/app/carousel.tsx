"use client"

import React, { useState } from "react";
import Container from "../components/container";

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
  const [albumData, setAlbumName] = useState<Album>({
    title: 'Albums',
    year: null,
    image: albums[0].image || '',
    listenHere: []

  })

  return (
    <Container>
      <div className="overflow-x-scroll">
        <section
          className="flex justify-center items-center gap-10 relative min-w-full w-fit p-10 mx-auto bg-center bg-cover transition-all"
          style={{ backgroundImage: albumData.image ? `url(${albumData.image})` : 'none' }}
        >
          <div
            id="bg-overlay"
            className="absolute top-0 left-0 w-full h-full backdrop-grayscale"
          ></div>
          {albums &&
            albums.map((album) => (
              <AlbumCard
                key={album.title}
                album={album}
                handleAlbumChange={setAlbumName}
              />
            ))}
        </section>
      </div>
      <div className="flex justify-between items-center border-black border-b-2">
        {albumData.title && (
          <h1 className="text-lg text-center my-4">
            {albumData.title}
          </h1>
        )}

        {albumData.year && (
          <h1 className="text-lg text-center my-4">
            {albumData.year}
          </h1>
        )}

        {albumData.listenHere && (
          <ul className="flex gap-8">
            {albumData.listenHere.map((link, idx) => (
              <li key={link + idx}>{link}</li>
            ))}
          </ul>
        )}
      </div>
    </Container>
  );
}

type AlbumProps = {
  album: Album;
  handleAlbumChange: React.Dispatch<React.SetStateAction<Album>>
};

function AlbumCard({ album, handleAlbumChange }: AlbumProps) {
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
      className="w-60 aspect-square bg-cover z-10 shadow-black shadow-md cursor-pointer hover:scale-105 ease-in-out duration-300"
      style={{ backgroundImage: `url(${image})` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hover && (
        <div className="bg-black bg-opacity-50 w-full h-full text-white flex flex-col justify-center items-center">
          <p>{title}</p>
          <p>{year}</p>
        </div>
      )}
    </div>
  );
}

export default Carousel;
