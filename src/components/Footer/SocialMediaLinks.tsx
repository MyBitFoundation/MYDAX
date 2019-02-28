import React from 'react'
import { SocialIcons } from '@constants/socialIcons'

export default class SocialMediaLinks extends React.Component<{}, {}> {
  links = SocialIcons
  constructor(props: {}) {
    super(props)
  }
  render() {
    return (
      <div className="pt32px">
        <p className="ttu white fh tc tl-l b tracked">Follow us</p>
        <div className="flex items-start-l justify-between items-center justify-start-l flex-wrap-l flex-column-l h4-l">
          {this.links.map(link => (
            <a href={link.href} rel="noopener noreferer" target="_blank">
              <img style={{width: '32px', height: '32px'}} src={link.icon} alt={link.name} height="32" width="32" />
            </a>
          ))}
        </div>
      </div>
    )
  }
}
