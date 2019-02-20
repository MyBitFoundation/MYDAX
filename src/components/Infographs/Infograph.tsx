import React from 'react'

interface InfographProps {
  title?: string
  icon?: string
  svgPath: string
}

class FeatureCard extends React.Component<InfographProps, {}> {
  constructor(props: InfographProps) {
    super(props)
  }

  render() {
    return (
      <div className="flex flex-column-reverse w-45 pa3 tc">
        <img alt="graphic" src={this.props.svgPath} />
        <p className="gilroy f4 mybitBlue">{this.props.title}</p>
        {this.props.icon && <img alt="myDax" src={this.props.icon} />}
      </div>
    )
  }
}
export default FeatureCard
