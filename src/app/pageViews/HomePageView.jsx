import React from "react";
import Tiles from "../components/Tiles/TilesView";

export default function(props) {
  return (
    <section className="mb-40">
      <Tiles parent={props.parent} />
    </section>
  );
}
