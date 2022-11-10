import Image from "next/image";
import React from "react";
import Link from "next/link";
import chevronSmall from "../../docs/chevron-small.svg";
import CardLink from "./CardLink";
import CardImage from "./CardImage";

interface CardProps {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
  isMobile: boolean;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <div className="card">
      <div className="card-body">
        <p className="labelBodyType">{props.bodyType}</p>
        <span className="labelModelName">{props.modelName}</span>
        {props.isMobile && <br />}
        <span className="labelModelType">{props.modelType}</span>

        <CardImage url={props.imageUrl} alt={props.modelName} />

        <div className="linkContainer">
          <CardLink title="LEARN" href="/learn/" id={props.id}></CardLink>
          <CardLink title="SHOP" href="/shop/" id={props.id}></CardLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
