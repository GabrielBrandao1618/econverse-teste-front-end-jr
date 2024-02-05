import "./style.scss";

type Props = {
  imgUrl: string;
};

export function BrandBadge({ imgUrl }: Props) {
  return (
    <div className="brand-badge">
      <img src={imgUrl} alt="" />
    </div>
  );
}
