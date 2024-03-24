import {useSelector} from 'react-redux';
import {RootState} from "../../app/store.ts";
import {useAppDispatch} from "../../app/hooks.ts";
import {setUrls} from "./slice.ts";


export const useTool = () => {
  return useSelector((state: RootState) => state.dicomViewer.tool);
}

export const useUrls = () => {
  return useSelector((state: RootState) => state.dicomViewer.urls);
}

export const useSetUrls = () => {
  const dispatch = useAppDispatch();

  return (urls: string[]) => {
    dispatch(setUrls(urls));
  }
}