import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

export const Form = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 340px) {
    width: 100%;
  }
`
