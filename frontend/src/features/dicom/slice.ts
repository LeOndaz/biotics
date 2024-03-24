// src/features/dicomViewer/dicomViewerSlice.js
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const dicomViewerSlice = createSlice({
  name: 'dicomViewer',
  initialState: {
    urls: [] as string[],
    tool: 'Scroll',
  },
  reducers: {
    setUrls: (state, action: PayloadAction<string[]>) => {
      state.urls = action.payload;
    },
    setTool: (state, action: PayloadAction<string>) => {
      state.tool = action.payload;
    },
  },
});

export const { setUrls, setTool } = dicomViewerSlice.actions;

export default dicomViewerSlice.reducer;
