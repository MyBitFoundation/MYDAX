import React from 'react'

export default class GetInvolved extends React.Component<{}, {}> {
  render() {
    return (
      <div className="tc tl-l pt32px w5-l">
        <p className="ttu white tc tl-l fh b tracked">Get Involved</p>
        <a
          style={{
            fontSize: '12px',
            letterSpacing: '1px',
            lineHeight: '48px',
            width: '100%',
            height: '48px'
          }}
          className="contribute f4 link br2 dib white ba ttu center tc whover gilroy tracked"
          href="https://task.market/"
        >
          Contribute
        </a>
      </div>
    )
  }
}
