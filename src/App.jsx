import { Route, Routes } from 'react-router-dom';
import Error from './pages/Error'
import LandingPage from './pages/LandingPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ResetPassword from './pages/ResetPassword'
import ForgotPassword from './pages/ForgotPassword'
function App() {

  return (
    <Routes>
        {/* Public Routes  */}
        <Route path='/' element={<LandingPage />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset/:id' element={<ResetPassword />} />

        {/* Private Routes
        <Route path="/" element={<Layout />}>
          <Route element={<RequireAuth />}>
            

          </Route>
        </Route> */}


        <Route path='*' element={<Error />} />
      </Routes>
  )
}

export default App
