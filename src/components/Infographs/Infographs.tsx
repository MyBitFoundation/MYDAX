import React from 'react'
import Infograph from '@components/Infographs/Infograph'
import MyDaxModel from '@images/mydax-model.svg'
import CurrentModel from '@images/current-model.svg'
import MyDaxLogo from '@images/mydax-logo.svg'

export default class Infographs extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props)
  }

  render() {
    return (
      <div className="w-80-l w-90-m w-100-s center flex flex-column flex-row-l justify-between pv32px ph4">
        <Infograph svgPath={CurrentModel} title="Centralized model" />
        <Infograph svgPath={MyDaxModel} icon={MyDaxLogo} />
      </div>
    )
  }
}
