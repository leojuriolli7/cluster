import MetaTags from '@components/MetaTags'
import withAuth from '@components/withAuth'
import { CreatePost } from '@screens/CreatePost'
import { NextPage } from 'next'

const CreatePostPage: NextPage = () => {
  return (
    <>
      <MetaTags title="Create a post" />
      <CreatePost />
    </>
  )
}

export default withAuth(CreatePostPage)
