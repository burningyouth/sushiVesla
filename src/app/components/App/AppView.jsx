import React from "react";
import Navbar from "../Navbar/NavbarView";
import Tiles from "../Tiles/TilesView";
import Footer from "../Footer/FooterView";

function AppView() {
  return (
    <main>
      <Navbar />
      <section className="mb-40">
        <Tiles />
      </section>
      <Footer />
    </main>
  );
}

export default AppView;
