import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

class HackFeed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.feed.map((article) => {
          console.log('is hackfeed', article);
          return <div>
                    {this.props.article}
                    {/* <ul className="reddit-list">
                      <li riot-tag="reddit" className="reddit-item">
                        <a className="link" href={article.url}>
                          <span className='reddit-title'>{article.title}</span>
                          <br />
                          <span className='reddit-subline'>
                           Reddit &nbsp;
                           {article.num_comments} comments
                           by {article.author.name}
                          </span>
                        </a>
                      </li>
                    </ul> */}
                </div>
        })}
      </div>
    )
  }
}

export default HackFeed;

// GET https://hacker-news.firebaseio.com/v0/items/
