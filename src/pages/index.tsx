import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <img

        height="85"
        width="250"

      />
      <h1>Hi, I'm Lennon!</h1>
      <h2>
        Welcome.{' '}
        <ExtLink
          href="https://github.com/vercel/next.js/issues/9524"
          className="dotted"
          style={{ color: 'inherit' }}
        >
        
        </ExtLink>
      </h2>

      <Features />

      <div className="explanation">
        <p>
        
        </p>
      </div>
    </div>
  </>
)
