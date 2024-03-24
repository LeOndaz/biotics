import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {login} from "./thunks.ts";
import {useLocalStorage} from "@uidotdev/usehooks";
import {accessTokenStorageKey} from "../../utils/consts.ts";


export const useIsLoggedIn = () => {
  const isAuthState = useAppSelector(state => state.auth.status) === "auth";
  const [token] = useLocalStorage(accessTokenStorageKey, null);

  // TODO
  const isValidToken = () => true

  return isAuthState && token && isValidToken();
}

export const useAuthFailed = () => {
  return useAppSelector(state => state.auth.status) === "failed";
}

export const useLogin = () => {
  const dispatch = useAppDispatch();

  return async (username: string, password: string) => {
    dispatch(
      login({
        username,
        password,
      }))
      .unwrap()
      .then(token => localStorage.setItem(accessTokenStorageKey, token))
  }
}
