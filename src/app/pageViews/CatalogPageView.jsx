import React from "react";
import Catalog from "../components/Catalog/CatalogView";

export default function(props) {
  return (
    <section className="mb-40">
      <Catalog parent={props.parent} />
    </section>
  );
}
