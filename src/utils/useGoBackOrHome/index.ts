import { useRouter } from 'next/router'
import { useHistory } from '@providers/HistoryManagerProvider'

const useGoBackOrGoToHomepage = () => {
  const router = useRouter()
  const historyManager = useHistory()

  const goBackOrGoToHomepage = () =>
    historyManager.canGoBack() ? router.back() : router.push('/')

  return goBackOrGoToHomepage
}

export default useGoBackOrGoToHomepage
