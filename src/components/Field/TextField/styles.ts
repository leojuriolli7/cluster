import styled from 'styled-components'

export const Input = styled.input<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: none;
  color: ${({ theme }) => theme.colors.system.contrast};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  height: 44px;
  margin-top: 8px;
  width: 100%;
  margin-bottom: 15px;
  padding-left: 5px;
  font-size: 15px;
  padding: 0 20px;
  font-family: 'Roboto';

  ${({ theme }) =>
    theme.name === 'light' &&
    `
  
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  `};

  :focus {
    border: none;
    outline: none;
  }
`
