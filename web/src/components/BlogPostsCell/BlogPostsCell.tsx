import type { BlogPostsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import BlogPost from '../BlogPost/BlogPost'

export const QUERY = gql`
  query BlogPostsQuery {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ posts }: CellSuccessProps<BlogPostsQuery>) => {
  return (
    <>
      {posts.map((post) => (
        <BlogPost post={post} key={post.id} />
      ))}
    </>
  )
}
