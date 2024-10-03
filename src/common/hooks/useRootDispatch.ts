import {useDispatch} from "react-redux";
import {RootDispatch} from "App/store.ts";

export const useRootDispatch = useDispatch.withTypes<RootDispatch>();