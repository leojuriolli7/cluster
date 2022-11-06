import { Text } from '@components/Text'
import styled from 'styled-components'

export const Container = styled.div.attrs({
  className: 'textArea__container'
})<{
  backgroundColor: string
}>`
  display: flex;
  flex: 1;
  height: auto;
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding: 15px 20px 10px 20px;
  flex-direction: column;
  margin-top: 8px;
  margin-bottom: 15px;

  ${({ theme }) =>
    theme.name === 'light' &&
    `
  
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  `};
`

export const TextArea = styled.textarea`
  min-height: 80px;
  width: 100%;
  resize: none;
  border: none;
  background-color: transparent;
  font-size: 16px;
  font-family: 'Roboto';
  color: ${({ theme }) => theme.colors.system.contrast};

  :focus {
    border: none;
    outline: none;
  }
`

export const CharactersLeftContainer = styled.div`
  bottom: 0;
  right: 10px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: 15px;
  font-family: 'Roboto';
`

export const CharactersLeft = styled(Text).attrs({
  size: '15px',
  color: 'system-grey'
})``
