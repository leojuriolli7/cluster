import { FC, useCallback, useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import useIsAuthenticated from '@utils/useIsAuthenticated'
import { toast } from 'react-toastify'
import MetaTags from '@components/MetaTags'
import ShouldRender from '@components/ShouldRender'
import { useRouter } from 'next/router'
import authStore from '@state/auth/auth'
import { GET_POST_BY_ID } from '@constants/queries'
import { PageWrapper } from '@components/PageWrapper'
import { PostContent } from './PostContent'
import { Comments } from './Comments'

import { EditPost } from './EditPost'
import * as S from './styles'

const Post: FC = () => {
  const [isEditing, setIsEditing] = useState(false)

  const [isAuthenticated] = useIsAuthenticated()
  const router = useRouter()
  const { id } = router.query

  const { data, loading, error } = useQuery(GET_POST_BY_ID, {
    variables: { id }
  })

  const post = data?.post || []

  const { user } = authStore()

  const handleClickEdit = useCallback(() => {
    setIsEditing(!isEditing)
  }, [isEditing])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    toast.error(error?.message)
  }, [error])

  useEffect(() => {
    if (!isAuthenticated) {
      setIsEditing(false)
    }
  }, [isAuthenticated])

  return (
    <>
      <MetaTags title={post?.title} description={post?.body} />
      <PageWrapper>
        <S.Container>
          <S.Content>
            <ShouldRender if={isEditing && isAuthenticated}>
              <EditPost post={post} setIsEditing={setIsEditing} />
            </ShouldRender>
            <ShouldRender if={!isEditing}>
              <PostContent
                onClickEdit={handleClickEdit}
                post={post}
                loading={loading}
                isAuthor={post?.author?.id === user?.id}
              />
            </ShouldRender>
          </S.Content>
          <Comments user={user} />
        </S.Container>
      </PageWrapper>
    </>
  )
}

export default Post
