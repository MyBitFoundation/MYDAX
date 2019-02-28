import React from 'react'
import { Benefit, BenefitProps } from '@components/Benefit'
import KeyIcon from '@images/key-icon.svg'
import FriendlyIcon from '@images/friendly-icon.svg'
import SpeedIcon from '@images/speed-icon.svg'
import LiquidityIcon from '@images/liquidity-icon.svg'
import CommunityIcon from '@images/community-icon.svg'

class Comparisons extends React.Component<{}, {}> {
  items: BenefitProps[] = [
    {
      iconPath: KeyIcon,
      text: 'Simple tools to manage and recover your key(s)',
      title: 'Key security'
    },
    {
      iconPath: FriendlyIcon,
      text: 'Easy to understand, use, and search',
      title: 'User friendly'
    },
    {
      iconPath: SpeedIcon,
      text: 'Options for secure off chain transactions',
      title: 'Speed'
    },
    {
      iconPath: LiquidityIcon,
      text: 'Instant selling through DAO Funds',
      title: 'Liquidity'
    },
    {
      iconPath: CommunityIcon,
      text:
        'Anything can be listed but only assets voted on by the community are automatically displayed',
      title: 'Community curated'
    }
  ]

  constructor(props: {}) {
    super(props)
  }

  render() {
    return (
      <div className="bg-white flex">
        <div className="w-60-l w-100-m w-100-s center pv80px">
          <div className="f3 gilroy lh-solid black pb16px ph3">
            Compared to decentralised exchanges
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
export default Comparisons
