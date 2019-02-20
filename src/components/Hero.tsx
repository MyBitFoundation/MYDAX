import React from 'react'
import heroIllustration from '@images/hero-bg.svg'
import heroLogo from '@images/hero-logo.svg'

class Hero extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props)
  }

  render() {
    return (
      <section
        style={{
          backgroundImage: `url(${heroIllustration})`,
          backgroundSize: 'cover',
          height: '573px',
        }}
      >
        <header className="w-50-l w-70-m w-90 center tc pv80px">
          <img alt="icon" className="pb24px pt3-l" src={heroLogo} />
          <div
            className="b f2-ns f3 lh-title white pb16px"
            style={{ fontFamily: 'Gilroy' }}
          >
            A different approach to Decentralized Exchanges
          </div>
          <div className="f4-ns f5 lh-copy fw1 white pb16px">
            Decentralised exchanges are difficult to use. MYDAX makes it simple
            by focusing on user-friendliness without sacrificing the security
            benefits of decentralisation.
          </div>
          <a
            style={{
              fontSize: '12px',
              letterSpacing: '1px',
              lineHeight: '24px',
              width: '192px',
            }}
            className="f4 link br2 ma12px pv2 dib bg-white shadow-1 ttu mybitBlue gilroy bhover"
            href="#signup"
          >
            Sign up for updates
          </a>
          <a
            style={{
              fontSize: '12px',
              letterSpacing: '1px',
              lineHeight: '24px',
              width: '192px',
            }}
            className="contribute f4 m2btn12px link br2 pv2 dib white ba ttu bhover gilroy"
            href="https://ddf.mybit.io/"
          >
            Contribute
          </a>
        </header>
      </section>
    )
  }
}
export default Hero
