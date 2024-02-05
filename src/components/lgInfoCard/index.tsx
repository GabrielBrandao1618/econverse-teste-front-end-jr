import "./style.scss";

import { MouseEventHandler } from "react";

type Props = {
  title: string;
  description: string;
  imgUrl: string;
  onBtnClick?: MouseEventHandler<HTMLButtonElement>;
};

export function LgInfoCard({ description, title, onBtnClick, imgUrl }: Props) {
  return (
    <div className="lg-info-card">
      <img src={imgUrl} alt="" />
      <div className="overlay" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={onBtnClick}>Confira</button>
    </div>
  );
}
