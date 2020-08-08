import React from "react";

function TilesView() {
  return (
    <div className="container container_fluid">
      <section className="tiles mt-15">
        <div className="tiles__category" style={{ backgroundColor: "#8ed8f7" }}>
          1
        </div>
        <div className="tiles__category" style={{ backgroundColor: "#f32b2b" }}>
          2
        </div>
        <div className="tiles__category" style={{ backgroundColor: "white" }}>
          3
        </div>
        <div className="tiles__category-wrapper">
          <div
            className="tiles__category"
            style={{ backgroundColor: "#f32b2b" }}
          >
            4
          </div>
          <div
            className="tiles__category"
            style={{ backgroundColor: "#9fe48b" }}
          >
            5
          </div>
        </div>
      </section>
    </div>
  );
}

export default TilesView;
