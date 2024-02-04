import "./style.scss";

type Props = {
  text: string;
};

export function SectionTitle({ text }: Props) {
  return (
    <div className="section-title-container">
      <hr />
      <h2>{text}</h2>
      <hr />
    </div>
  );
}
