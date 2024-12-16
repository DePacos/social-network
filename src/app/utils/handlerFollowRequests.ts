import { changeIsLoading, setNotifications } from "@/entities/reducers/appReducer"
import { AxiosError, AxiosResponse } from "axios"
import { Dispatch } from "react"
import { AppActions, FollowActions, Response } from "@/app/types/types"


export const handlerFollowRequests =
  async <T extends Response | boolean>(
    request: () => Promise<AxiosResponse<T>>,
    dispatch: Dispatch<FollowActions | AppActions>,
    action: (data: boolean) => FollowActions
  ): Promise<void> => {
    dispatch(changeIsLoading(true))
    try {
      const res = await request()
      if (typeof res.data === "object" && "resultCode" in res.data && typeof res.data.resultCode === "number") {
        if (res.data.resultCode === 0) {
          switch (res.config.method) {
            case "post":
              dispatch(action(true))
              break
            case "delete":
              dispatch(action(false))
              break
          }
        } else {
          dispatch(setNotifications(res.data.messages[0]))
        }
      } else {
        dispatch(action(res.data as boolean))
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(setNotifications(error.message))
      }
    } finally {
      dispatch(changeIsLoading(false))
    }
  }