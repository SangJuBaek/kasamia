import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ListDataState } from 'types'

const initialState: ListDataState = {
  listData: []
}

export const listDataSlice = createSlice({
  name: 'listData',
  initialState,
  reducers: {
    setListData (state, action: PayloadAction<any>) {
      state.listData = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setListData } = listDataSlice.actions

export default listDataSlice.reducer
