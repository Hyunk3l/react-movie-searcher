import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Movie extends Component {
  static propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
    plot: PropTypes.string,
    rating: PropTypes.string,
  }
  render() {
    const { poster, title, year, plot, rating } = this.props

    return (
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img
              alt={title}
              src={
                poster === "N/A"
                ? "https://bulma.io/images/placeholders/128x128.png"
                : poster
              } />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{title}</strong> <small>{year}</small>
              <br />
              {plot}
              <br />
              <small>Rating: {rating}</small>
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a className="level-item">
                <span className="icon is-small"><i className="fas fa-reply"></i></span>
              </a>
              <a className="level-item">
                <span className="icon is-small"><i className="fas fa-retweet"></i></span>
              </a>
              <a className="level-item">
                <span className="icon is-small"><i className="fas fa-heart"></i></span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    )
  }
}
