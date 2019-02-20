import React from 'react'

export interface BenefitProps {
  title: string
  iconPath: string
  text?: string
}

export class Benefit extends React.Component<BenefitProps, {}> {
  constructor(props: BenefitProps) {
    super(props)
  }

  render() {
    return (
      <table className="w-100 w-50-ns pt24px ph2">
      <thead>
      <tr>
        <th style={{width: '56px'}}><img style={{width: '56px'}} className="tl db" alt="icon" src={this.props.iconPath} /></th>
        <th className="gilroy f3 tl pl2">{this.props.title}</th>
      </tr>
      </thead>
      <tbody>
        <td></td>
        <td className="f4 lh-copy pl2">{this.props.text}</td>
      </tbody>
      </table>
    )
  }
}
