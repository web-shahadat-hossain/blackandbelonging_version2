import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface aboutPageState {
  about: {
    banner_top_text: string;
    banner_middle_text: string;
    banner_bottom_text: string;
    section_two_main_title: string;
    section_two_title: string;
    section_two_description: string;
    section_three_title: string;
    section_three_description: string;
    section_four_title: string;
    section_four_description: string;
    welcome_message_title: string;
    welcome_message_description: string;
    linkedin_text: string;
    linkedin_url: string;
  };
}

const initialState: aboutPageState = {
  about: {
    banner_top_text: "",
    banner_middle_text: "",
    banner_bottom_text: "",
    section_two_main_title: "",
    section_two_title: "",
    section_two_description: "",
    section_three_title: "",
    section_three_description: "",
    section_four_title: "",
    section_four_description: "",
    welcome_message_title: "",
    welcome_message_description: "",
    linkedin_text: "",
    linkedin_url: "",
  },
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    setAbout: (state, action: PayloadAction<aboutPageState["about"]>) => {
      state.about = action.payload;
    },
  },
});

export default aboutSlice.reducer;
export const { setAbout } = aboutSlice.actions;
