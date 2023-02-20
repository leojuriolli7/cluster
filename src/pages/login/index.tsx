import MetaTags from '@components/MetaTags'
import withAuth from '@components/withAuth'
import { Login } from '@screens/Login'
import { NextPage } from 'next'

const LoginPage: NextPage = () => {
  return (
    <>
      <MetaTags title="Login" />
      <Login />
    </>
  )
}

export default withAuth(LoginPage, true)
