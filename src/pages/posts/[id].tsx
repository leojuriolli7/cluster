import { GET_POST_BY_ID } from '@constants/queries'
import { Post as PostType } from '@constants/types'
import { Post } from '@screens/Post'
import { GetServerSideProps, NextPage } from 'next'
import client from 'src/api/apollo-client'

type Props = {
  post: PostType
}

const PostPage: NextPage<Props> = ({ post }) => {
  return <Post post={post} />
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { data } = await client.query({
    query: GET_POST_BY_ID,
    variables: {
      id: query.id
    }
  })

  return {
    props: {
      post: data.post
    }
  }
}

export default PostPage
