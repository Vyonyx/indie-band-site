import React from "react";
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
    <Container>
      <div className="flex gap-10">
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
  return (
    <div>
      <div>{title}</div>
      <div>{year}</div>
      {image && <div>Has Image</div>}
      {listenHere && <div>Listen Here</div>}
    </div>
  );
}

export default Carousel;
