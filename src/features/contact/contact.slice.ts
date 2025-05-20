import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface contactPageState {
  contact: {
    contact_title: string;
    email_text: string;
    email_url: string;
    twitter_text: string;
    twitter_url: string;
    youtube_text: string;
    youtube_url: string;
    instagram_text: string;
    instagram_url: string;
  };
}

const initialState: contactPageState = {
  contact: {
    contact_title: "",
    email_text: "",
    email_url: "",
    twitter_text: "",
    twitter_url: "",
    youtube_text: "",
    youtube_url: "",
    instagram_text: "",
    instagram_url: "",
  },
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setContact: (state, action: PayloadAction<contactPageState["contact"]>) => {
      state.contact = action.payload;
    },
  },
});

export default contactSlice.reducer;
export const { setContact } = contactSlice.actions;
