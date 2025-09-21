import parse from "html-react-parser";
export { parse };

const BASE_ADMIN = "https://blackandbelonging.xyz/api/";
const BASE_USER = "https://blackandbelonging.xyz/user/";

// const BASE_ADMIN = "http://localhost:3006/";
// const BASE_USER = "http://localhost:3001/";

const BASE_URL = `${BASE_ADMIN}admin/api/v1`; // Define a common base URL
const USER_BASE_URL = `${BASE_USER}api/v1`; // Base URL for user-related endpoints

export const SECRET_KEY = "8vsyi4g7qdE7v0vfstz9NHozLlL6kCA56SaqhNg5p9r4XB2k";

export const ENVIRONMENT = {
  GOOGLE_KEY: import.meta.env.VITE_GOOGLE_KEY,
  KEY: import.meta.env.VITE_KEY,
};

export const SOCIAL_LINKS = {
  NAME: "DeLeon Gray",
  ABOUT_VIDEO: "https://www.youtube.com/watch?v=sTnckrACUfQ",
  YOUTUBE: "https://www.youtube.com/channel/UCzgAKVLce6G2N8QUHTEbs-Q",
  WEBSITE: "https://blackandbelonging.com/",
  INSTAGRAM: "https://www.instagram.com/HeartBelonging",
  TWITTER: "https://twitter.com/HeartBelonging",
  PHONE: "(919) 593-7730",
  LOCATION: "65 TW Alexander Drive, Unit 12899, Durham, North Carolina, 27709",
  MAIL: "contact@blackandbelonging.com",
  LINKEDIN: "https://www.linkedin.com/company/black-and-belonging/about/",
  BOUTIQUE: "https://shop.blackandbelonging.com",
  GITHUB: "",
  FACEBOOK: "",
  INITIATVES:
    "https://storage.googleapis.com/blackandbelonging/blackandbelonging-website-all-pdf/initiatives.pdf",
  SUPPORT_EMAIL: "support@blackandbelonging.com",
};

export const TEAM_LINKED_LINKS = {
  deleon: "https://www.linkedin.com/in/deleon-gray-phd-67b2a3b/",
  Joanna: "https://www.linkedin.com/in/joannaali",
  Kia: "https://www.linkedin.com/in/Kia-Allah",
  Malenia: "https://www.linkedin.com/in/malenialswinton",
};

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  LOGIN: "/login",
  REGISTER: "/register",
  MIXTAPES: "/mixtapes",
  VIEW_MIXTAPE: "/mixtapes/:id",
  VIEW_MIXTAPE_TRACKLIST: "/mixtapes/:id/tracklist",
  NEWS: "/news",
  VIEW_NEWS: "/news/:id",
  POLLS: "/polls",
  VIEW_POLL: "/polls/:slug",
  TERMS_OF_USE: "/terms-of-use",
  COOKIE_POLICY: "/cookie-policy",
  COMMUNITY_GUIDELINES: "/community-guidelines",
  AUTHOR_REQUESTS: "/author-requests",
  DMCA_NOTICE: "/dmca-notice",
  SETTINGS: "/settings",
  EVENTS: "/events",
  VIEW_EVENT: "/events/:id",
  GALLERY: "/gallery",
  VIDEO_GALLERY: "/gallery/videos",
  PHOTO_GALLERY: "/gallery/photos",
  RSVP: "/rsvp",
  VIEW_RSVP: "/rsvp/:id",
  PLAYBOOK: "/admin/playbook/:slug/:id",
  ADD_PLAYBOOK: "/admin/add-playbook",
  VERIFY_ADMIN: "/admin/verify-admin/:token/:slug/:id",
  PLAYBOOKS: "/admin/playbooks",
  PLAYBOOK_SUBTABS: "/admin/playbook/:slug/:id/:tabId",
  USER_PLAYBOOKS: "/playbooks",
  USER_PLAYBOOK: "/playbooks/:slug",
  SUMMER_BOOTCAMP: "/summer_bootcamp_2025_description",
  SPEAK_LIFE: "/speak-life",
};

export const API = {
  NEWS: `${BASE_URL}/blogs/:rows/:page`,
  SINGLE_NEWS: `${BASE_URL}/blogs/`,
  MIXTAPES: `${BASE_URL}/mixtapes/list/:rows/:page`,
  MIXTAPE: `${BASE_URL}/mixtapes/mixtape/`,
  MEDIA: "https://api.blackandbelonging.com/wp-json/wp/v2/media",
  REGISTER: `${USER_BASE_URL}/auth/signup`,
  AUTHORREQUEST: `${USER_BASE_URL}/author-requests`,
  LOGIN: `${USER_BASE_URL}/auth/login`,
  EVENTS: `${BASE_URL}/events/:rows/:page`,
  EVENT: `${BASE_URL}/events/`,
  UPLOAD_FILE: "https://blackandbelongingdevops.online/upload",
  EVENT_PARTICIPATION: `${BASE_URL}/events/createParticipant`,
  USER_CHECK:
    "https://api.blackandbelonging.com/wp-json/custom-plugin/user_check/",
  POLLS: `${BASE_URL}/polls/list/:limit/:offset`,
  POLL: `${BASE_URL}/polls/poll/`,
  POLL_VIDEOS: `${BASE_URL}/polls/videos/:id/:userId`,
  VOTE: `${BASE_URL}/polls/vote`,
  FORGOT_PASSWORD: `${USER_BASE_URL}/auth/forgot_password`,
  UPDATE_PASSWORD: `${USER_BASE_URL}/auth/update_password`,
  GET_SINGLE_TRACK: `${BASE_URL}/mixtapes/track/:id`,
  GET_NEWS_CATEGORY: `${BASE_URL}/categories/:id`,
  GET_PROFILE: `${USER_BASE_URL}/user/profile`,
  VERFIY_EMAIL: `${USER_BASE_URL}/auth/verify`,
  RSVP: {
    GET_ALL: `${BASE_URL}/rsvps/:rows/:page`,
    DELETE_RSVP: `${BASE_URL}/rsvps/:id`,
    GET_RSVP: `${BASE_URL}/rsvps/:id`,
    ADD_PARTICIPANT: `${BASE_URL}/rsvps/createParticipant`,
  },
  GET_ABOUT: `${BASE_URL}/about`,
  GET_CONTACT: `${BASE_URL}/contact`,
  GET_HOME: `${BASE_URL}/home`,
  NEWSLETTER: `${BASE_URL}/newsletter/`,
  PLAYBOOK: {
    CREATE_PLAYBOOK: `${BASE_URL}/playbook/`,
    PLAYBOOKS: `${BASE_URL}/playbook/`,
    GET_SINGLE_PLAYBOOK: `${BASE_URL}/playbook/slug/:id`,
    GET_MAIN_TABS: `${BASE_URL}/playbook/:id/tabs`,
    CREATE_TAB: `${BASE_URL}/playbook/tab`,
    GET_SUBTABS: `${BASE_URL}/playbook/tab/:id/subtabs`,
    UPDATE_PLAYBOOK: `${BASE_URL}/playbook/:id`,
    DELETE_PLAYBOOK: `${BASE_URL}/playbook/:id`,
    DELETE_MAIN_TAB: `${BASE_URL}/playbook/tab/:id`,
    CREATE_SUBTAB: `${BASE_URL}/playbook/subtab`,
    UPDATE_SUBTAB: `${BASE_URL}/playbook/subtab/:id`,
    DELETE_SUBTAB: `${BASE_URL}/playbook/subtab/:id`,
    GET_SUBTAB: `${BASE_URL}/playbook/subtab/:id`,
    GET_MAINTAB: `${BASE_URL}/playbook/tab/:id`,
  },
  GET_ADMIN_PROFILE: `${BASE_URL}/auth/profile`,
};

export const REGEX = {
  EMAIL:
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  PHONE: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
  PHONE_STRICT: /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/,
};

export const TOAST_MESSAGE = {
  LOGGED_IN: "You've logged in successfully.",
  LOGGED_OUT: "You've successfully signed out",
  REGISTRATION: "You've been successfully registered",
};

export const STREAM_DETAILS = {
  NAME: "Blackandbelonging",
  URL: "https://blackandbelonging.com",
  ID: "8124956811",
  MEASUREMENT_ID: "G-LGQLMCY3MW",
};
