import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../layout/LandingPage';
import Login from '../screen/auth/Login';
import { AuthRoutes } from './routes';
import AuthMain from '../layout/AuthMain';
import { useSelector } from 'react-redux';
import Register from '../screen/auth/Register';

const Auth = () => {
    const authInfo = useSelector((state) => state.auth);
    const token = authInfo.token || null;

    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path={AuthRoutes.USER_REGISTER} element={<AuthMain inner={<Register />} name={"User Register"} />} />
            <Route path={AuthRoutes.USER_LOGIN} element={<AuthMain inner={<Login />} name={"User Login"} />} />
            {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
        </Routes>
    )
}

export default Auth