import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {Link} from "../types";

export const postLink = createAsyncThunk<Link | null, string>(
  'postLink/post',
  async (url) => {
    const response = await axiosApi.post<Link>('/links', {originalUrl: url});
    const jsn = response.data;

    if (!jsn) {
      throw new Error('not found')
    }

    return jsn
  }
);