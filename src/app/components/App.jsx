import React from "react";
import ArticleList from "./ArticleList";
import articles from "../articles";

function App() {
  return (
    <div className="testClass">
      <h1>Hello World!</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
