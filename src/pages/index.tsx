import { NextPage } from 'next'
import { Home } from '@screens/Home'
import MetaTags from '@components/MetaTags'

const HomePage: NextPage = () => {
  return (
    <>
      <MetaTags title="Home" />
      <Home />
    </>
  )
}

export default HomePage
