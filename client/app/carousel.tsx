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
  return (
    <Container cssExtension="overflow-x-scroll">
      <div className="flex gap-10 w-fit py-10 mx-auto">
        {albums &&
          albums.map((album) => <AlbumCard key={album.title} album={album} />)}
      </div>
    </Container>
  );
}

type AlbumProps = {
  album: Album;
};

function AlbumCard({ album }: AlbumProps) {
  const { title, year, image, listenHere } = album;
  const [hover, setHover] = useState(false)

  return (
    <div
      className="w-60 aspect-square bg-cover"
      style={{ backgroundImage: `url(${image})` }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
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
