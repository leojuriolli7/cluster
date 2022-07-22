import { FC } from 'react'
import useFormattedDistanceToNow from '@utils/useFormattedDistanceToNow'
import { Post } from '@constants/types'
import { Text } from '@components/Text'

import * as S from './styles'

type Props = {
  post?: Post
  loading: boolean
}

const Home: FC<Props> = ({ post, loading }) => (
  <S.PostText>
    <S.PostInfo>
      <Text
        loading={loading}
        shimmerWidth="clamp(250px, 50%, 550px)"
        type="big-title"
      >
        {post?.title}
      </Text>
      <S.PostDates>
        <Text loading={loading} type="medium-label" shimmerWidth={100}>
          Posted {useFormattedDistanceToNow(Number(post?.createdAt))}
        </Text>
        <Text loading={loading} type="medium-label" shimmerWidth={100}>
          Updated {useFormattedDistanceToNow(Number(post?.updatedAt))}
        </Text>
      </S.PostDates>
      <Text
        loading={loading}
        ellipsis
        type="super-big-label"
        weight={400}
        shimmerWidth={150}
      >
        By{' '}
        <Text loading={loading} type="super-big-label" tag="span" weight={600}>
          {post?.author?.displayName}
        </Text>
      </Text>
    </S.PostInfo>
    <S.PostBodyContainer>
      <Text
        loading={loading}
        shimmerWidth="100%"
        shimmerLines={3}
        type="big-label"
        ellipsis
        numberOfLines={5}
        align="justify"
      >
        {post?.body}
      </Text>
    </S.PostBodyContainer>
  </S.PostText>
)

export default Home
