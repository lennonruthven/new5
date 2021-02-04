import ExtLink from './ext-link'

export default () => (
  <>
    <footer>
      <span>...</span>
      <ExtLink href="https://vercel.com/import/git?s=https://github.com/ijjk/notion-blog/tree/master&env=NOTION_TOKEN,BLOG_INDEX_ID&envDescription=Required+env+values+for+deploying&envLink=https://github.com/ijjk/notion-blog%23getting-blog-index-and-token">
        <img
          src="..."
          height={46}
          width={132}
          alt="..."
        />
      </ExtLink>
      <span>
        or{' '}
        <ExtLink href="https://github.com/ijjk/notion-blog">
          view source
        </ExtLink>
      </span>
    </footer>
  </>
)