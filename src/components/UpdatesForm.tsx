import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
class UpdatesForm extends React.Component<{}, {}> {
  state = {
    email: ''
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value })
  }

  handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    alert('An email was submitted: ' + this.state.email)
    event.preventDefault()
  }

  render() {
    return (
      <div id="signup" className="bg-white pb80px pt0 tc">
        <div className="br2 w-90 w-40-l w70-m center shadow-1 pv3-ns">
          <p className="gilroy f4 black pt3">Sign up for Updates</p>
          <MailchimpSubscribe
            url="https://mybit.us15.list-manage.com/subscribe/post?u=af48b1fdb5278fd9884338f23&amp;id=dbcac41639"
            render={({ subscribe, message }) => {
              let messageToRender = ''
              if (!message) {
                messageToRender = ''
              } else if (message.indexOf('is already subscribed') !== -1) {
                messageToRender = 'This email is already subscribed.'
              } else if (
                message.indexOf('too many recent signup requests') !== -1
              ) {
                messageToRender = 'Error: too many recent signup requests.'
              } else {
                messageToRender =
                  'Thank you! Check your inbox for confirmation.'
              }
              return (
                <form
                  onSubmit={e => {
                    e.preventDefault()
                    subscribe({ EMAIL: this.state.email })
                  }}
                >
                  <div>
                    <div className="flex-ns w-90-ns center-ns">
                      <input
                        className="input-reset mailInput h25 br2 br--left-ns ba b--black-20 center w-90 w-60-ns pa3 mb3"
                        placeholder="Your email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                      />
                      <button
                        type="submit"
                        value="Submit"
                        className="input-reset br2 br--right-ns ba b--black-20 center w-90 h25 f6 w-40-ns mb3 ttu gilroy b tracked white bg-mybitBlue bhover"
                      >
                        Sign up for updates
                      </button>
                    </div>
                    {messageToRender}
                  </div>
                </form>
              )
            }}
          />
        </div>
      </div>
    )
  }
}
export default UpdatesForm
