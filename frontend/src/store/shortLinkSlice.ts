import { createSlice } from '@reduxjs/toolkit';
import {RootState} from "../app/store";
import {postLink} from "./shortLinkThunk";
import {Link} from "../types";

interface ShortLinkState {
  url: Link | null;
  loading: boolean;
}

const initialState:ShortLinkState = {
  url: null,
  loading: false,
};

export const shortLinkSlice = createSlice({
  name: 'shortLink',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postLink.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postLink.fulfilled, (state, {payload: url}) => {
      state.loading = false;
      state.url = url;
    });
    builder.addCase(postLink.rejected, (state) => {
      state.loading = false;
    });
  }
});

export const shortLinkReducer = shortLinkSlice.reducer;

export const selectUrl = (state:RootState) => state.shortLink.url
export const selectLoading = (state:RootState) => state.shortLink.loading