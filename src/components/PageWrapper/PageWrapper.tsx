import React, { FC } from 'react'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import ShouldRender from '@components/ShouldRender'

type Props = {
  children: React.ReactNode
  noFooter?: boolean
}

const PageWrapper: FC<Props> = (props) => {
  const { children, noFooter = false } = props

  return (
    <>
      <Header />
      {children}
      <ShouldRender if={!noFooter}>
        <Footer />
      </ShouldRender>
    </>
  )
}
export default PageWrapper
