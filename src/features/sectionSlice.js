import { createSlice } from '@reduxjs/toolkit';

export const sectionSlice = createSlice({
  name: 'section',
  initialState: {
    selected: {
        pSelect: true,
        pColor: '#D93025',
        sSelect: false,
        sColor: '#1A73E8',
        prSelect: false,
        prColor: '#188038'
    },
  },
  reducers: {
    select: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { select } = sectionSlice.actions;
export const selectSection = state => state.section.selected;

export default sectionSlice.reducer;
