import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import listDataReducer from 'store/list'

export const store = configureStore({
  reducer: {
    listData: listDataReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
