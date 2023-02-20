import { FC, useCallback, useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import useIsAuthenticated from '@utils/useIsAuthenticated'
import { toast } from 'react-toastify'
import MetaTags from '@components/MetaTags'
import ShouldRender from '@components/ShouldRender'
import { useRouter } from 'next/router'
import { Post as PostType } from '@constants/types'
import authStore from '@state/auth/auth'
import { GET_POST_BY_ID } from '@constants/queries'
import { PageWrapper } from '@components/PageWrapper'
import { PostContent } from './PostContent'
import { Comments } from './Comments'

import { EditPost } from './EditPost'
import * as S from './styles'

type Props = {
  post: PostType
}

const Post: FC<Props> = ({ post }) => {
  const [isEditing, setIsEditing] = useState(false)

  const [isAuthenticated] = useIsAuthenticated()

  const { user } = authStore()

  const handleClickEdit = useCallback(() => {
    setIsEditing(!isEditing)
  }, [isEditing])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
