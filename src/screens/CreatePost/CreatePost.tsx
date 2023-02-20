import { FC, useCallback, useEffect } from 'react'
import { HOMEPAGE_POSTS_QUERY } from '@constants/queries'
import { useMutation } from '@apollo/client'
import useIsTheme from '@utils/useIsTheme'
import { PageWrapper } from '@components/PageWrapper'
import { Button } from '@components/Button'
import { CREATE_POST } from '@constants/mutations'
import { yupResolver } from '@hookform/resolvers/yup'
import { Field } from '@components/Field'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { Text } from '@components/Text'
import { toast } from 'react-toastify'

import { formSchema } from './_validations'
import * as S from './styles'
import { useRouter } from 'next/router'

const CreatePost: FC = () => {
  const { t } = useTranslation()

  const [createPost, { loading, error }] = useMutation(CREATE_POST)

  const router = useRouter()

  const fieldBackgroundColor = useIsTheme('system-secondary', 'system-tertiary')

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(formSchema) })

  const handleClick = useCallback((payload) => {
    createPost({
      variables: { title: payload?.title, body: payload?.body },
      refetchQueries: [HOMEPAGE_POSTS_QUERY]
    }).then((response) => {
      router.push(`/posts/${response?.data?.createPost?.id}`)
    })
  }, [])

  useEffect(() => {
    if (error) toast.error(error?.message)
  }, [error])

  return (
    <PageWrapper noFooter>
      <S.Container>
        <S.Content>
          <Text
            type="big-title"
            tag="h1"
            align="center"
            style={{ margin: '0 10px', lineHeight: 1.1 }}
          >
            {t('createPost')}
          </Text>
          <S.Form>
            <Field
              type="text"
              label={t('postTitle')}
              placeholder={t('postTitlePlaceholder')}
              backgroundColor={fieldBackgroundColor}
              name="title"
              control={control}
              error={errors?.title?.message}
            />
            <Field
              type="textarea"
              label={t('postContent')}
              placeholder={t('postContentPlaceholder')}
              backgroundColor={fieldBackgroundColor}
              name="body"
              control={control}
              error={errors?.body?.message}
              style={{ height: '200px', resize: 'vertical' }}
            />
            <Button
              type="submit"
              label={t('create')}
              upperCase
              width={200}
              backgroundColor="social-instagram"
              textColor="status-contrast"
              onClick={handleSubmit(handleClick)}
              loading={loading}
            />
          </S.Form>
        </S.Content>
      </S.Container>
    </PageWrapper>
  )
}

export default CreatePost
