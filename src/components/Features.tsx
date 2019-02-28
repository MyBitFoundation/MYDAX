import React from 'react'
import { FeatureCard, FeatureCardProps } from '@components/FeatureCard'
import Trade from '@images/trade-icon.svg'
import Token from '@images/token-icon.svg'
import Sell from '@images/sell-icon.svg'

class Features extends React.Component<{}, {}> {
  items: FeatureCardProps[] = [
    {
      bulletPoints: [
        'MyBit Go assets',
        'Intellectual property',
        'Digital content and media',
        'Non-fungible tokens'
      ],
      iconPath: Trade,
      title: 'Buy, sell and trade assets'
    },
    {
      bulletPoints: [
        'Real estate',
        'Luxury items',
        'Shares of companies (equity/security tokens)',
        'Financial instruments such as options, bonds, ETFs, and other derivatives'
      ],
      iconPath: Token,
      title: 'Tokenise existing assets'
    },
    {
      iconPath: Sell,
      text:
        // tslint:disable-next-line:max-line-length
        'Tired of finding a buyer or navigating confusing order books? MYDAX offers instant selling and guaranteed liquidity for many assets. This is made possible by DAO Funds that easily integrate with MYDAX and automatically purchase assets according to predefined criteria.',
      title: 'Instant selling'
    }
  ]

  render() {
    return (<>
      <div
        className="b f2-ns f3 black tc pt60px"
        style={{ fontFamily: 'Gilroy' }}
      >
        What can I do with MYDAX?
      </div>
      <div className="pb80px mh3 mh3-l mh2-m center-s">
        <div className="w-100-l w-100-m w-100-s center flex flex-row-ns flex-column align-center items-stretch-ns items-center justify-center content-stretch pt60px">
          {this.items.map(item => (
            <FeatureCard
              title={item.title}
              iconPath={item.iconPath}
              bulletPoints={item.bulletPoints}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </>)
  }
}
export default Features
