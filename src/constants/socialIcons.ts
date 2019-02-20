import TelegramIcon from '@images/social/telegram-white.svg'
import MediumIcon from '@images/social/medium.svg'
import FacebookIcon from '@images/social/facebook-white.svg'
import RedditIcon from '@images/social/reddit-white.svg'
import TwitterIcon from '@images/social/twitter-white.svg'

export interface SocialIcon {
  name: string
  href: string
  icon: string
}

export const SocialIcons: SocialIcon[] = [
  {
    name: 'reddit',
    href: 'https://www.reddit.com/r/MyBitToken/',
    icon: RedditIcon
  },
  {
    name: 'twitter',
    href: 'https://twitter.com/MyBit_DApp',
    icon: TwitterIcon
  },
  {
    name: 'facebook',
    href: 'https://www.facebook.com/MyBitDApp/',
    icon: FacebookIcon
  },
  { name: 'telegram', href: 'https://t.me/mybitio', icon: TelegramIcon },
  { name: 'medium', href: 'https://medium.com/mybit-dapp', icon: MediumIcon }
]
