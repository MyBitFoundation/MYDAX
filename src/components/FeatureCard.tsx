import React from 'react'
import PlusIcon from '@images/plus-icon.svg'
export interface FeatureCardProps {
  title: string
  iconPath: string
  bulletPoints?: string[]
  text?: string
}

export class FeatureCard extends React.Component<FeatureCardProps, {}> {
  constructor(props: FeatureCardProps) {
    super(props)
  }

  render() {
    return (
      <div
        style={{ minHeight: '20rem'}}
        className="bg-white shadow-1 mw5 br1 ph3 pt3 mh3 mh3-l mh2-m w5 mb4 mb0-ns"
      >
        <div className="relative">
          <img
            alt="icon"
            style={{
              left: '50%',
              position: 'absolute',
              top: '50%',
              transform: 'translate(-50%, -83.5%)'
            }}
            src={this.props.iconPath}
          />
        </div>
        <p className="tc gilroy f5 pt3">{this.props.title}</p>
        <p className="f5 lh-copy">{this.props.text}</p>
        {this.props.bulletPoints &&
          this.props.bulletPoints.map(e => {
            return (
              <div className="flex items-start">
                <img alt="icon" className="pv1 pr2" src={PlusIcon} />
                <p className="f5 lh-copy">{e}</p>
              </div>
            )
          })}
      </div>
    )
  }
}
