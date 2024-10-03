import {useSelector} from "react-redux";
import {RootState} from "App/store.ts";

export const useRootSelector = useSelector.withTypes<RootState>();
