import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <LandingPage /> },
        { path: '/register', element: <Register /> },
        { path: '/login', element: <Login /> },
        { path: '/profiles', element: <Profiles /> },
        { path: '/profile/:id', element: <Profile /> },
        { path: '/dashboard', element: <Dashboard /> },
        { path: '/create-profile', element: <ProfileForm /> },
        { path: '/edit-profile', element: <ProfileForm /> },
        { path: '/add-experience', element: <AddExperience /> },
        { path: '/add-education', element: <AddEducation /> },
        { path: '/posts', element: <Posts /> },
        { path: '/posts/:id', element: <Post /> }
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

// IMPORT COMPONENTS

// Authentication
// Dashboard
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
// Main
const LandingPage = Loadable(lazy(() => import('../pages/LandingPage')));
const Register = Loadable(lazy(() => import('../pages/auth/Register')));
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const Profiles = Loadable(lazy(() => import('../pages/profiles/Profiles')));
const Profile = Loadable(lazy(() => import('../pages/profile/Profile')));
const Dashboard = Loadable(lazy(() => import('../pages/dashboard/Dashboard')));
const ProfileForm = Loadable(lazy(() => import('../pages/profile-forms/ProfileForm')));
const AddExperience = Loadable(lazy(() => import('../pages/profile-forms/AddExperience')));
const AddEducation = Loadable(lazy(() => import('../pages/profile-forms/AddEducation')));
const Posts = Loadable(lazy(() => import('../pages/posts/Posts')));
const Post = Loadable(lazy(() => import('../pages/post/Post')));
