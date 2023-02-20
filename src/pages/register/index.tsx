import MetaTags from '@components/MetaTags'
import withAuth from '@components/withAuth'
import { Register } from '@screens/Register'
import { NextPage } from 'next'

const RegisterPage: NextPage = () => {
  return (
    <>
      <MetaTags
        title="Create an account"
        description="Create an account and start posting & commenting on Cluster!"
      />
      <Register />
    </>
  )
}

export default withAuth(RegisterPage, true)
