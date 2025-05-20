import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface loadingState {
  loading: boolean;
}

const initialState: loadingState = {
  loading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export default loadingSlice.reducer;
export const { setLoading } = loadingSlice.actions;
