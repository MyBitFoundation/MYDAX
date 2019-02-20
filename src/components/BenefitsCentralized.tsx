import React from 'react'
import { Benefit, BenefitProps } from '@components/Benefit'
import SecurityIcon from '@images/security-icon.svg'
import HandShakeIcon from '@images/handshake-icon.svg'

class Benefits extends React.Component<{}, {}> {
  items: BenefitProps[] = [
    {
      iconPath: SecurityIcon,
      text:
        'You never have to trust someone else with your money. You are in full control of it at all times.',
      title: 'Security'
    },
    {
      iconPath: HandShakeIcon,
      text:
        'Brokers, escrow agents, and other expensive third parties are not needed to complete transactions.',
      title: 'No expensive third parties'
    }
  ]

  constructor(props: {}) {
    super(props)
  }

  render() {
    return (
      <div className="bg-white">
        <div className="w-60-l w-100-m w-100-s center pv80px">
          <div style={{fontSize: '1.75rem'}} className="mybitBlue gilroy lh-solid ph3 pb16px">What are the benefits?</div>
          <div className="f3 gilroy lh-solid black ph3 pb16px">
            Compared to centralised exchanges
          </div>
          <div className="flex flex-wrap">
            {this.items.map(item => (
              <Benefit
                title={item.title}
                iconPath={item.iconPath}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default Benefits
