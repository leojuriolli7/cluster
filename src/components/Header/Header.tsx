import { FC, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@components/Button'
import { Text } from '@components/Text'
import useIsAuthenticated from '@utils/useIsAuthenticated'
import Logo from '@assets/images/logo.svg'
import authStore from '@state/auth/auth'

import ShouldRender from '../ShouldRender'
import { ThemeSwitch } from './ThemeSwitch'

import { Avatar } from './Avatar'
import * as S from './styles'

const Header: FC = () => {
  const { t } = useTranslation()

  const { setToken, setUser } = authStore()

  const [isAuthenticated] = useIsAuthenticated()

  const navigate = useNavigate()

  const goTo = useCallback((to: string) => () => navigate(to), [])

  const handleClickAvatar = useCallback(() => {
    setToken(undefined)
    setUser(undefined)
    goTo('/')
    // TODO: Remove localStorage and replace with zustrand
    localStorage.setItem('cluster-token', undefined)
  }, [])

  return (
    <S.Container>
      <S.Content>
        <S.LogoContainer onClick={goTo('/')}>
          <S.Logo src={Logo} />
          <Text
            color="social-instagram"
            type="big-title"
            className="header-logo-text"
          >
            Cluster
          </Text>
        </S.LogoContainer>
        <S.SettingsContainer>
          <ShouldRender if={isAuthenticated}>
            <Avatar onClick={handleClickAvatar} />
          </ShouldRender>

          <ShouldRender if={!isAuthenticated}>
            <Button
              width={100}
              label={t('login')}
              onClick={goTo('/login')}
              backgroundColor="social-instagram"
              textColor="status-contrast"
            />
          </ShouldRender>
          <ThemeSwitch />
        </S.SettingsContainer>
      </S.Content>
    </S.Container>
  )
}

export default Header
