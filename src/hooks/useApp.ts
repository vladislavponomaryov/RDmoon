import {useTypedSelector} from "./useTypedSelector";

export const useApp = () => useTypedSelector(state => state.app)