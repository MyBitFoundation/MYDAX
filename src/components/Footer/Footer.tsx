import React from 'react'
import SocialMediaLinks from '@components/Footer/SocialMediaLinks'
import AboutLinks from '@components/Footer/AboutLinks'
import CompanyInfo from '@components/Footer/CompanyInfo'
import GetInvolved from '@components/Footer/GetInvolved'
import Copyright from '@components/Footer/Copyright'

class Footer extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props)
  }

  render() {
    return (
      <section
        style={{
          backgroundColor: '#1890ff'
        }}
      >
        <div className="w-100 w-80-l w-30-m center pt24px pb48px ph2">
          <div className="flex flex-column flex-row-l justify-between-l ph4 ph0-ns lh2">
            <div className="order-2-l">
              <GetInvolved />
            </div>
            <div className="order-1-l">
              <SocialMediaLinks />
            </div>
            <div className="order-0-l">
              <AboutLinks />
            </div>
            <div className="order-3-l">
              <CompanyInfo />
            </div>
        
      </section>
    )
  }
}
export default Footer
