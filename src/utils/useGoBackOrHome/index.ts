import { useNavigate, useNavigationType } from 'react-router-dom'

const useGoBackOrHome = () => {
  const navigate = useNavigate()
  const type = useNavigationType()

  const goBackOrHome = () => {
    if (type === 'POP') {
      return navigate('/')
    }

    return navigate(-1)
  }

  return goBackOrHome
}

export default useGoBackOrHome
