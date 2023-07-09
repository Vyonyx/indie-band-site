"use client"

import React, { useState } from "react";
import Container from "../components/container";

export type Album = {
  title: string;
  year: number;
  image: string;
  listenHere?: string[];
};

type Props = {
  albums: Album[];
};

function Carousel({ albums }: Props) {
  const [bg, setBg] = useState<string>(albums[0].image || '')

  return (
    <Container cssExtension="overflow-x-scroll">
      <section
        className="flex justify-center items-center gap-10 relative min-w-full w-fit p-10 mx-auto bg-center transition-all"
        style={{ backgroundImage: bg ? `url(${bg})` : 'none' }}
      >
        <div
          id="bg-overlay"
          className="absolute top-0 left-0 w-full h-full backdrop-grayscale"
        ></div>
        {albums &&
          albums.map((album) => <AlbumCard key={album.title} album={album} handleBgChange={setBg} />)}
      </section>
    </Container>
  );
}

type AlbumProps = {
  album: Album;
  handleBgChange: React.Dispatch<React.SetStateAction<string>>;
};

function AlbumCard({ album, handleBgChange }: AlbumProps) {
  const { title, year, image, listenHere } = album;
  const [hover, setHover] = useState(false)

  function handleMouseEnter() {
    setHover(true)
    handleBgChange(image)
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
          {listenHere && <p>listen here</p>}
        </div>
      )}
    </div>
  );
}

export default Carousel;
