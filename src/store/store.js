import { configureStore } from '@reduxjs/toolkit'
import dataTableSlice from '../components/dataTableSlice/dataTableSlice'

export const store = configureStore({
  reducer: {

    dataTableStore:dataTableSlice
  },
})