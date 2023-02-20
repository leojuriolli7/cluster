import { FC, useCallback, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { PageWrapper } from '@components/PageWrapper'
import { Button } from '@components/Button'
import { LOGIN } from '@constants/mutations'
import { yupResolver } from '@hookform/resolvers/yup'
import authStore from '@state/auth/auth'
import useIsAuthenticated from '@utils/useIsAuthenticated'
import useGoBackOrHome from '@utils/useGoBackOrHome'
import { Field } from '@components/Field'
import ShouldRender from '@components/ShouldRender'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { Text } from '@components/Text'
import { toast } from 'react-toastify'

import { formSchema } from './_validations'
import * as S from './styles'
import Link from 'next/link'

const Login: FC = () => {
  const { t } = useTranslation()

  const [login, { loading, error }] = useMutation(LOGIN)
  const { setToken, setUser } = authStore()
  const [isAuthenticated] = useIsAuthenticated()

  const goBackOrHome = useGoBackOrHome()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(formSchema) })

  const handleClick = useCallback((payload) => {
    login({
      variables: { email: payload?.email, password: payload?.password }
    }).then((response) => {
      setToken(response.data.login.token)
      setUser(response.data.login.user)
      // TODO: Remove localStorage and replace with zustrand
      localStorage.setItem('cluster-token', response.data.login.token)

      goBackOrHome()
    })
  }, [])

  useEffect(() => {
    if (error) toast.error(error?.message)
  }, [error])

  return (
    <PageWrapper noFooter>
      <S.Container>
        <S.Content>
          <ShouldRender if={isAuthenticated}>
            <Text type="big-title">{t('alreadyLogged')}</Text>
            <Link href="/">
              <Text type="small-title" style={{ marginTop: '35px' }} underline>
                {t('goBackHome')}
              </Text>
              <Text
                tag="a"
                type="small-title"
                style={{ marginTop: '35px' }}
                underline
              >
                {t('goBackHome')}
              </Text>
            </Link>
          </ShouldRender>
          <ShouldRender if={!isAuthenticated}>
            <Text tag="h1" type="big-title">
              {t('login')}
            </Text>
            <S.Form>
              <Field
                type="email"
                label={t('email')}
                placeholder={t('yourEmail')}
                name="email"
                control={control}
                error={errors?.email?.message}
              />
              <Field
                type="password"
                label={t('password')}
                placeholder={t('yourPassword')}
                hasPasswordEye
                name="password"
                control={control}
                error={errors?.password?.message}
              />
              <Button
                type="submit"
                label={t('login')}
                width={200}
                backgroundColor="social-instagram"
                textColor="status-contrast"
                onClick={handleSubmit(handleClick)}
                loading={loading}
              />
              <Link href="/register" replace>
                <Text
                  type="small-title"
                  style={{ marginTop: '35px' }}
                  underline
                >
                  {t('dontHaveAccount')}
                </Text>
              </Link>
            </S.Form>
          </ShouldRender>
        </S.Content>
      </S.Container>
    </PageWrapper>
  )
}

export default Login
