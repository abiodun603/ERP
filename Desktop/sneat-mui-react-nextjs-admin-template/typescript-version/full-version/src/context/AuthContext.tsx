// ** React Imports
import { createContext, useEffect, useState, ReactNode } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'

// ** Types
import { AuthValuesType, LoginParams, ErrCallbackType, UserDataType } from './types'

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user)
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)
  console.log(user)

  // ** Hooks
  const router = useRouter()

  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)!
      setLoading(true)
      console.log(storedToken)
      if (storedToken) {
        const userData = JSON.parse(window.localStorage.getItem(authConfig.storageDatekeyName)!)
        console.log(userData, storedToken)

        setLoading(false)
        setUser(userData)
        console.log(user)
      } else {
        localStorage.removeItem('userData')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('accessToken')
        setUser(null)
        setLoading(false)
        if (authConfig.onTokenExpiration === 'logout' && !router.pathname.includes('login')) {
          router.replace('/login')
        }
        setLoading(false)
      }
    }

    initAuth()
  }, [])

  const handleLog = async (params: LoginParams, errorCallback?: ErrCallbackType) => {
    try {
      await axios
        .post(authConfig.loginEndpoint, {
          email: params.email,
          password: params.password
        })
        .then(async response => {
          console.log(response.data)

          params.rememberMe
            ? window.localStorage.setItem(authConfig.storageTokenKeyName, response?.data?.data.token)
            : null
          const returnUrl = router.query.returnUrl

          setUser({ ...response?.data?.data?.user })
          params.rememberMe ? window.localStorage.setItem('userData', JSON.stringify(response?.data?.data?.user)) : null

          const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'

          router.replace(redirectURL as string)
        })

        .catch(err => {
          if (errorCallback) errorCallback(err)
        })
    } catch (err) {
      console.log(err)
    }
  }

  const handleLogout = () => {
    console.log('dfdfd')
    setUser(null)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/login')
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLog,
    logout: handleLogout
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
