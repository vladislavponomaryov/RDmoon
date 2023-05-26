import {createSlice} from '@reduxjs/toolkit'

type appState = {
    list: any[]
}

const initialState: appState = {
    list: []
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        addElement: (state) => {
            if (state.list.length < 5)
                state.list.unshift({id: state.list.length + 1})
        },
        removeElement: (state) => {
            if (state.list.length > 0) {
                state.list.pop()
            }
        }
    },
})

export const {addElement, removeElement} = appSlice.actions

export default appSlice.reducer