import "./style.scss";

import { ReactNode } from "react";

type Props = {
  name: string;
  children: ReactNode;
};

export function ProductCategoryCard({ name, children }: Props) {
  return (
    <div className="product-category-card">
      <div className="card">{children}</div>
      <p className="name">{name}</p>
    </div>
  );
}
