import { useEffect } from 'react'
import { useRouter } from 'next/router'
import ShouldRender from '@components/ShouldRender'
import useIsAuthenticated from '@utils/useIsAuthenticated'
import { NextComponentType } from 'next'
import Error from 'next/error'

const withAuth = (Component: NextComponentType, isAuthPage?: boolean) => {
  const isSSR = typeof window === 'undefined'

  const NotAuthorized = () => <Error statusCode={401} title="Not Authorized" />

  const Auth = () => {
    const [isAuthenticated] = useIsAuthenticated()

    const router = useRouter()

    const shouldRenderComponent =
      (isAuthenticated && !isAuthPage) || (!isAuthenticated && isAuthPage)

    useEffect(() => {
      if (isAuthPage && isAuthenticated) router.push('/')
    }, [])

    return (
      <>
        <ShouldRender if={isSSR}>
          <div />
        </ShouldRender>
        <ShouldRender if={!isSSR}>
          <ShouldRender if={shouldRenderComponent}>
            <Component />
          </ShouldRender>
          <ShouldRender if={!isAuthPage && !isAuthenticated}>
            <NotAuthorized />
          </ShouldRender>
        </ShouldRender>
      </>
    )
  }

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps
  }

  return Auth
}

export default withAuth
