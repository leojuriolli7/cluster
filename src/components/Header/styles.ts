import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.system.secondary};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1800px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px 20px;

  .react-switch-handle {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  img {
    filter: invert(32%) sepia(98%) saturate(950%) hue-rotate(289deg)
      brightness(81%) contrast(97%);
  }

  .header-logo-text {
    @media (max-width: 425px) {
      display: none;
    }
  }
`

export const Logo = styled(Image).attrs({
  width: 40,
  height: 40,
  alt: 'Cluster'
})``

export const SettingsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
