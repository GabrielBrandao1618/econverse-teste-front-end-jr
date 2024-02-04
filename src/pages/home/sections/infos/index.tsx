import { LgInfoCard } from "../../../../components/lgInfoCard";
import { SectionTitle } from "../../../../components/sectionTitle";
import "./style.scss";

export function InfosSection() {
  return (
    <section className="infos-section">
      <div className="infos-row">
        <LgInfoCard
          description="Lorem ipsum dolor sit amet"
          imgUrl="/img/info-bg.jpg"
          title="Parceiros"
        />
        <LgInfoCard
          description="Lorem ipsum dolor sit amet"
          imgUrl="/img/info-bg.jpg"
          title="Parceiros"
        />
      </div>
      <SectionTitle text="Produtos relacionados" />
      <h3 className="center-subtitle">Ver todos</h3>
      <div className="infos-row">
        <LgInfoCard
          description="Lorem ipsum dolor sit amet"
          imgUrl="/img/info-bg.jpg"
          title="Produtos"
        />
        <LgInfoCard
          description="Lorem ipsum dolor sit amet"
          imgUrl="/img/info-bg.jpg"
          title="Produtos"
        />
      </div>
    </section>
  );
}
