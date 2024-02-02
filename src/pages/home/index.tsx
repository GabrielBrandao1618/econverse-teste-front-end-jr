import "./style.scss";

import { Header } from "../../components/header";
import { HeroSection } from "./sections/hero";

export function HomePage() {
  return (
    <>
      <Header />
      <main className="home">
        <HeroSection />
      </main>
    </>
  );
}
