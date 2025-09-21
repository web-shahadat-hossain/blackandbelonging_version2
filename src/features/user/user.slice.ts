import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface userDetails {
  username?: string;
  displayName?: string;
  email?: string;
  first_name?: string;
  registeredDate?: string;
  userId?: string;
  role?: "customer";
  status?: string;
  userImg?: string;
  userType?: string;
}
interface userState {
  userDetails: userDetails;
  auth: boolean;
  isAdmin?: boolean;
}

const initialState: userState = {
  userDetails: {},
  auth: false,
  isAdmin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<userDetails>) => {
      state.userDetails = { ...state.userDetails, ...action.payload };
    },
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.auth = action.payload;
    },
    setAdmin: (state, action: PayloadAction<boolean>) => {
      state.isAdmin = action.payload;
    },
    resetUser: () => {
      return initialState; // Reset state to initial state
    },
  },
});

export default userSlice.reducer;
export const { setAdmin, setUser, setAuth, resetUser } = userSlice.actions;
