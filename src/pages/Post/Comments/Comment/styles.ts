import { Text } from '@components/Text'
import styled from 'styled-components'

export const Comment = styled.div`
  background: ${({ theme }) => theme.colors.system.tertiary};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 1800px;
  gap: 20px;
  margin-top: 20px;
`

export const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const CommentText = styled.div`
  width: 100%;
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const ActionText = styled(Text).attrs({
  type: 'medium-label',
  shimmerWidth: 100,
  color: 'social-instagram'
})`
  cursor: pointer;
  width: fit-content;

  text-decoration: none;

  &:hover {
    filter: opacity(0.8);
  }
`
