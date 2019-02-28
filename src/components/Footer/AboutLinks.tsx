import React from 'react'
import { AboutLinks } from '@constants/aboutLinks'

export default class SocialMediaLinks extends React.Component<{}, {}> {
  links = AboutLinks
  constructor(props: {}) {
    super(props)
  }
  render() {
    return (
      <div className="center pt32px">
        <p className="ttu white fh tc tl-l b tracked">about</p>
        <div className="flex flex-column items-center tc tl-l">
          {this.links.map((link, index, array) => (
          
            <a
              style={{fontSize: '16px'}}
              className={`white ${index !== array.length -1 ? 'pb2': ''} w-100 link normal tc tl-l`}
              href={link.href}
              rel="noopener noreferer"
              target="_blank"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    )
  }
}
