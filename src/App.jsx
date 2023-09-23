import { Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';  
import Layout from "./pages/Layout";
import RequireAuth from "./pages/RequireAuth";
import Dashboard from "./pages/Dashboard";
import InviteFriends from "./pages/InviteFriends";
import MakePayment from "./pages/MakePayment";
import Calendar from "./pages/Calendar";
import LinkAccounts from "./pages/LinkAccounts";
import Activity from "./pages/Activity";
import { Support } from "./pages/Support";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* Public Routes  */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Private Routes */}
        <Route path="/" element={<Layout />}>
          <Route element={<RequireAuth />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/activity' element={<Activity />} />
            <Route path='/link-accounts' element={<LinkAccounts />} />
            <Route path='/invite-friends' element={<InviteFriends />} />
            <Route path='/support' element={<Support />} />
            <Route path='/make-payment' element={<MakePayment />} />

          </Route>
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
