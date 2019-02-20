import React from 'react'

export default class Copyright extends React.Component<{}, {}> {
  render() {
    return (
      <div className="pt24px center tc tr-l white flex-l mr0-l">
        <a
          className="white link underline order-1-l tr-l"
          href="https://github.com/MyBitFoundation/MyBit.io/blob/develop/TOC.md"
        >
          Terms and Conditions
        </a>
          <div className="order-0-l flex-l center tr-l pl5-l">
          <div className="pt24px pt0-l center ph2-l">Copyright © MyBit 2019.</div>
          <div className="pt24px pt0-l center ph2-l">All Rights Reserved.</div>
        </div>
      </div>
    )
  }
}