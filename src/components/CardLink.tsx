import Image from "next/image";
import React from "react";
import Link from "next/link";
import chevronSmall from "../../docs/chevron-small.svg";

interface CardLinkProps {
  title: string;
  href: string;
  id: string;
}

const CardLink: React.FC<CardLinkProps> = (props: CardLinkProps) => {
  return (
    <Link href={`${props.href}${encodeURIComponent(props.id)}`}>
      <a className="link">
        <span className="linkText">{props.title}</span>
        <div className="linkImageContainer">
          <Image
            src={chevronSmall}
            width={13}
            height={13}
            alt={props.title}
            className="linkImage"
          />
        </div>
      </a>
    </Link>
  );
};

export default CardLink;
