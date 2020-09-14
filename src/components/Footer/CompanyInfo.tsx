import React from 'react'
import MyBitLogo from '@images/mybit-logo.svg'

export default class CompanyInfo extends React.Component<{}, {}> {
  render() {
    return (
      <div className="center tc tr-l white pt32px">
        <img src={MyBitLogo} alt="MyBit" />
    
      </div>
    )
  }
}
