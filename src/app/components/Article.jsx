import React, { Component } from "react";

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render = () => {
    const { article } = this.props,
      text = article.text,
      title = article.title,
      date = article.created,
      body = this.state.isOpen && (
        <div>
          <div>Posted: {date}</div>
          <p>{text}</p>
        </div>
      );
    return (
      <article className="article">
        <h2>
          {title}&nbsp;
          <button onClick={this.handleClick}>
            {this.state.isOpen ? "Close" : "Open"}
          </button>
        </h2>
        {body}
      </article>
    );
  };
}

export default Article;
