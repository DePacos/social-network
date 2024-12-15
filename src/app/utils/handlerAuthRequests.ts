import { changeIsInitialized, changeIsLoading, setNotifications } from "@/entities/reducers/appReducer"
import { AxiosError, AxiosResponse } from "axios"
import { Dispatch } from "react"
import { DispatchActions, Response } from "@/app/types/types"
import { changeIsLoggedInStatus, setCaptcha } from "@/entities/reducers/authReducer"
import { authAPI } from "@/shared/api/authAPI"

export const handlerAuthRequests =
  async <T extends Response>(
    request: () => Promise<AxiosResponse<T>>,
    dispatch: Dispatch<DispatchActions>,
    action?: (data: T) => DispatchActions,
  ):Promise<void> => {
    dispatch(changeIsLoading(true))
    try {
      const res = await request()
      console.log('fn', res)
        if(res.data.resultCode === 0){
          if(res.config.method === 'post'){
            if(action){
            dispatch(action(res.data))
            }
            dispatch(changeIsLoggedInStatus(true))
          }
          if(res.config.method === 'delete'){
            dispatch(changeIsLoggedInStatus(false))
          }
          if(res.config.method === 'get' && res.config.url?.split('/')[2] === 'me'){
            if(action){
              dispatch(action(res.data))
            }
            dispatch(changeIsLoggedInStatus(true))
            dispatch(changeIsInitialized(true))
          }
        }
        if(res.data.resultCode === 10){
          const resCaptcha = await authAPI.captcha()
          dispatch(setCaptcha(resCaptcha.data.url))
          dispatch(setNotifications(res.data.messages[0]))
        }
        if(res.data.resultCode === 1){
          if(res.config.method === 'get' && res.config.url?.split('/')[2] === 'me'){
            dispatch(changeIsInitialized(true))
          }
          dispatch(setNotifications(res.data.messages[0]))
        }
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(setNotifications(error.message))
      }
    } finally {
      dispatch(changeIsLoading(false))
    }
  }