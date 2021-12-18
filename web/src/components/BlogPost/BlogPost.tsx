import { Link, routes } from '@redwoodjs/router'
import { FindBlogPostQuery } from 'types/graphql'

const BlogPost = ({ post }: { post: FindBlogPostQuery['post'] }) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
        </h2>
      </header>
      <div>{post.body}</div>
    </article>
  )
}

export default BlogPost
