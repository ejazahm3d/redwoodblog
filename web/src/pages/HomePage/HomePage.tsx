import { MetaTags } from '@redwoodjs/web'
import BlogPostsCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      Home
      <BlogPostsCell />
    </>
  )
}

export default HomePage
