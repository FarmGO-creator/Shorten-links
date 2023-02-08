import { createSlice } from '@reduxjs/toolkit';
import {RootState} from "../app/store";

interface ShortLinkState {
  url: string;
  loading: boolean;
}

const initialState:ShortLinkState = {
  url: '',
  loading: false,
}

export const shortLinkSlice = createSlice({
  name: 'shortLink',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

  }
});

export const shortLinkReducer = shortLinkSlice.reducer;

export const selectUrl = (state:RootState) => state.shortLink.url
export const selectLoading = (state:RootState) => state.shortLink.loading