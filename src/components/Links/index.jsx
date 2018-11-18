import React from 'react'
import { FaResearchgate } from 'react-icons/fa'

import './style.scss'
import '../../assets/fonts/fontello-771c82e0/css/fontello.css'

class Links extends React.Component {
  render() {
    const author = this.props.data
    const links = {
      twitter: author.twitter,
      github: author.github,
      email: author.email,
      researchgate: author.researchgate,
    }

    return (
      <div className="links">
        <ul className="links__list">
          <li className="links__list-item">
            <a
              href={`https://www.researchgate.net/profile/${links.researchgate}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i style={{ verticalAlign: 'text-top' }}>
                <FaResearchgate />
              </i>
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`https://www.github.com/${links.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-github" />
            </a>
          </li>

          <li className="links__list-item">
            <a
              href={`https://www.twitter.com/${links.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-twitter" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`mailto:${links.email}`}>
              <i className="icon-mail" />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Links
