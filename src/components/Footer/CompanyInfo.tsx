import React from 'react'
import MyBitLogo from '@images/mybit-logo.svg'

export default class CompanyInfo extends React.Component<{}, {}> {
  render() {
    return (
      <div className="center tc tr-l white pt32px">
        <img src={MyBitLogo} alt="MyBit" />
        <div className="lh-copy normal f6 tc tr-l center mr0-l">
            MyBit Foundation. Dammstrasse 16, 6300 Zug, Switzerland<br/>
            Registration no. CHE-177.186.963
        </div>
      </div>
    )
  }
}
