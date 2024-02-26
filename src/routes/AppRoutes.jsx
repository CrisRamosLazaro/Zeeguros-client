import { Routes, Route } from 'react-router-dom'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PrivateRoute from './PrivateRoute'
import AdminPage from '../pages/AdminPage/AdminPage'
import UserDetails from '../pages/UserDetails/UserDetails'
import UserEdit from '../pages/UserEdit/UserEdit'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import OwnUserPage from '../pages/OwnUserPage/OwnUserPage'
import HomePage from '../pages/HomePage/HomePage'
import PolicyUploaderPage from '../pages/PolicyUploaderPage/PolicyUploaderPage'
import SelectBrokerPage from '../pages/SelectBrokerPage/SelectBrokerPage'

const AppRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<h1>About this app</h1>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />

            <Route element={<PrivateRoute admittedRoles={['ADMIN', 'BROKER', 'USER']} />}>
                <Route path='/profile' element={<ProfilePage />} />
                <Route path="/profile/edit/:id" element={<OwnUserPage />} />
            </Route>

            <Route element={<PrivateRoute admittedRoles={['ADMIN', 'BROKER']} />}>

            </Route>

            <Route element={<PrivateRoute admittedRoles={['ADMIN', 'USER']} />}>
                <Route path="/upload-policy" element={<PolicyUploaderPage />} />
                <Route path="/select-broker" element={<SelectBrokerPage />} />

            </Route>

            <Route element={<PrivateRoute admittedRoles={['ADMIN']} />}>
                <Route path="/users" element={<AdminPage />} />
                <Route path="/users/:id" element={<UserDetails />} />
                <Route path="/users/edit/:id" element={<UserEdit />} />
            </Route>

            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )

}

export default AppRoutes