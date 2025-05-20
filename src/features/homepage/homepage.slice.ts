import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface homePageState {
  homepage: {
    banner_title: string;
    banner_description: string;
    section_two_box_1_text: string;
    section_two_box_1_count: string;
    section_two_box_2_text: string;
    section_two_box_2_count: string;
    section_two_box_3_text: string;
    section_two_box_3_count: string;
    section_two_box_4_text: string;
    section_two_box_4_count: string;
    last_section_title: string;
    last_section_description: string;
    last_section_button_text: string;
    last_section_button_link: string;
  };
}

const initialState: homePageState = {
  homepage: {
    banner_title: "",
    banner_description: "",
    section_two_box_1_text: "",
    section_two_box_1_count: "",
    section_two_box_2_text: "",
    section_two_box_2_count: "",
    section_two_box_3_text: "",
    section_two_box_3_count: "",
    section_two_box_4_text: "",
    section_two_box_4_count: "",
    last_section_title: "",
    last_section_description: "",
    last_section_button_text: "",
    last_section_button_link: "",
  },
};

const homepageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    setHomepage: (state, action: PayloadAction<homePageState["homepage"]>) => {
      state.homepage = action.payload;
    },
  },
});

export default homepageSlice.reducer;
export const { setHomepage } = homepageSlice.actions;
