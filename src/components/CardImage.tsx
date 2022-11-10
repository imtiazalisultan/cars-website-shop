import Image from "next/image";
import React from "react";

interface CardImageProps {
  url: string;
  alt: string;
}

const CardImage: React.FC<CardImageProps> = (props: CardImageProps) => {
  return (
    <Image
      src={props.url}
      className="card-img"
      layout="responsive"
      width={150}
      height={120}
      alt={props.alt}
    />
  );
};

export default CardImage;
