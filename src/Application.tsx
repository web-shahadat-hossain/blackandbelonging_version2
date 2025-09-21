import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./components/layout/HomeLayout/HomeLayout";
import About from "./components/pages/About/About";
import AddPlaybook from "./components/pages/admin/AddPlaybook/AddPlaybook";
import Playbook from "./components/pages/admin/Playbook/Playbook";
import Playbooks from "./components/pages/admin/Playbooks/Playbooks";
import VerifyAdmin from "./components/pages/admin/VerifyAdmin/VerifyAdmin";
import CommunityGuidlines from "./components/pages/CommunityGuidlines/CommunityGuidlines";
import Contact from "./components/pages/Contact/Contact";
import CookiePolicy from "./components/pages/CookiePolicy/CookiePolicy";
import DMCANotice from "./components/pages/DMCANotice/DMCANotice";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";
import Events from "./components/pages/Events/Events";
import Gallery from "./components/pages/Gallery/Gallery";
import Photos from "./components/pages/Gallery/Photos";
import Videos from "./components/pages/Gallery/Videos";
import Homepage from "./components/pages/Homepage/Homepage";
import Login from "./components/pages/Login/Login";
import Mixtapes from "./components/pages/Mixtapes/Mixtapes";
import News from "./components/pages/News/News";
import NotFound from "./components/pages/NotFound/NotFound";
import UserPlaybooks from "./components/pages/Playbooks/Playbooks.tsx";
import Polls from "./components/pages/Polls/Polls";
import Register from "./components/pages/Register/Register";
import Rsvp from "./components/pages/Rsvp/Rsvp";
import Settings from "./components/pages/Settings/Settings";
import TermsOfUse from "./components/pages/TermsOfUse/TermsOfUse";
import UserPlaybook from "./components/pages/UserPlaybook/UserPlaybook.tsx";
import ViewEvent from "./components/pages/ViewEvent/ViewEvent";
import MixtapeDescription from "./components/pages/ViewMixtape/MixtapeDescription/MixtapeDescription";
import MixtapeTracklist from "./components/pages/ViewMixtape/MixtapeTracklist/MixtapeTracklist";
import ViewMixtape from "./components/pages/ViewMixtape/ViewMixtape";
import ViewNews from "./components/pages/ViewNews/ViewNews";
import ViewPoll from "./components/pages/ViewPoll/ViewPoll";
import ViewRsvp from "./components/pages/ViewRsvp/ViewRsvp";
import AdminGaurd from "./gaurds/AdminGaurd.tsx";
import AuthGaurd from "./gaurds/AuthGaurd";
import NoGaurd from "./gaurds/NoGaurd";
import { ROUTES } from "./utils/constant";
import BudgetBreakdown from "./components/pages/summer_bootcamp/budget-breakdown.tsx";
import AuthorRequests from "./components/pages/AuthorRequests/AuthorRequests.tsx";

const Application = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      ErrorBoundary: ErrorPage,
      children: [
        {
          path: ROUTES.HOME,
          element: <Homepage />,
        },
        {
          path: ROUTES.LOGIN,
          element: (
            <NoGaurd>
              <Login />
            </NoGaurd>
          ),
        },
        {
          path: ROUTES.REGISTER,
          element: (
            <NoGaurd>
              <Register />
            </NoGaurd>
          ),
        },
        {
          path: ROUTES.MIXTAPES,
          children: [
            {
              index: true,
              element: <Mixtapes />,
            },
            {
              path: ROUTES.VIEW_MIXTAPE,
              element: <ViewMixtape />,
              children: [
                {
                  index: true,
                  element: <MixtapeDescription />,
                },
                {
                  path: ROUTES.VIEW_MIXTAPE_TRACKLIST,
                  element: (
                    <AuthGaurd>
                      <MixtapeTracklist />
                    </AuthGaurd>
                  ),
                },
              ],
            },
          ],
        },
        {
          path: ROUTES.NEWS,
          children: [
            {
              index: true,
              element: <News />,
            },
            {
              path: ROUTES.VIEW_NEWS,
              element: <ViewNews />,
            },
          ],
        },
        {
          path: ROUTES.EVENTS,
          children: [
            {
              index: true,
              element: <Events />,
            },
            {
              path: ROUTES.VIEW_EVENT,
              element: <ViewEvent />,
            },
          ],
        },
        {
          path: ROUTES.RSVP,
          children: [
            {
              index: true,
              element: <Rsvp />,
            },
            {
              path: ROUTES.VIEW_RSVP,
              element: <ViewRsvp />,
            },
          ],
        },
        {
          path: ROUTES.CONTACT,
          element: <Contact />,
        },
        {
          path: ROUTES.ABOUT,
          element: <About />,
        },
        {
          path: ROUTES.GALLERY,
          element: <Gallery />,
          children: [
            {
              path: ROUTES.VIDEO_GALLERY,
              element: <Videos />,
            },
            {
              path: ROUTES.PHOTO_GALLERY,
              element: <Photos />,
            },
          ],
        },
        {
          path: ROUTES.SETTINGS,
          element: (
            <AuthGaurd>
              <Settings />
            </AuthGaurd>
          ),
        },
        {
          path: ROUTES.TERMS_OF_USE,
          element: (
            <>
              <TermsOfUse />
            </>
          ),
        },
        {
          path: ROUTES.AUTHOR_REQUESTS,
          element: (
            <>
              <AuthorRequests />
            </>
          ),
        },
        {
          path: ROUTES.SUMMER_BOOTCAMP,
          element: <BudgetBreakdown />,
        },

        {
          path: ROUTES.COOKIE_POLICY,
          element: (
            <>
              <CookiePolicy />
            </>
          ),
        },
        {
          path: ROUTES.COMMUNITY_GUIDELINES,
          element: (
            <>
              <CommunityGuidlines />
            </>
          ),
        },
        {
          path: ROUTES.DMCA_NOTICE,
          element: (
            <>
              <DMCANotice />
            </>
          ),
        },
        {
          path: ROUTES.POLLS,
          children: [
            {
              index: true,
              element: <Polls />,
            },
            {
              path: ROUTES.VIEW_POLL,
              element: (
                <AuthGaurd>
                  <ViewPoll />
                </AuthGaurd>
              ),
            },
          ],
        },
        {
          path: ROUTES.USER_PLAYBOOKS,
          element: <UserPlaybooks />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: ROUTES.VERIFY_ADMIN,
      element: <VerifyAdmin />,
    },
    {
      path: "/",
      element: (
        <AdminGaurd>
          <Outlet />
        </AdminGaurd>
      ),
      children: [
        {
          path: ROUTES.PLAYBOOKS,
          element: <Playbooks />,
        },
        {
          path: ROUTES.PLAYBOOK_SUBTABS,
          element: <Playbook />,
        },
        {
          path: ROUTES.PLAYBOOK,
          element: <Playbook />,
        },
        {
          path: ROUTES.ADD_PLAYBOOK,
          element: <AddPlaybook />,
        },
      ],
    },
    {
      path: ROUTES.USER_PLAYBOOK,
      element: <UserPlaybook />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Application;
