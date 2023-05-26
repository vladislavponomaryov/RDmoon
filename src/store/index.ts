import { configureStore } from '@reduxjs/toolkit'

import appReducer from './slices/app'

let store = configureStore({
    reducer: {
        app: appReducer,
    },
    devTools: true
})

export type TypeRootState = ReturnType<typeof store.getState>

export default store