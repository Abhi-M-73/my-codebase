import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import UserDashboard from '../screen/user/UserDashboard';
import DashboardMain from '../layout/DashboardMain';
import AdminDashboard from '../screen/admin/AdminDashboard';
import { useSelector } from 'react-redux';
import { AuthenicatedRoutes } from './routes';
import UserDirectTeam from '../screen/user/team/UserDirectTeam';
import UserLevelTeam from '../screen/user/team/UserLevelTeam';
import UserReferralIncome from '../screen/user/income/UserReferralIncome';
import UserLevelIncome from '../screen/user/income/UserLevelIncome';
import UserRoiIncome from '../screen/user/income/UserRoiIncome';
import UserDeposit from '../screen/user/payment/UserDeposit';
import UserMakeInvestment from '../screen/user/investment/UserMakeInvestment';
import UserInvestmentHistory from '../screen/user/investment/UserInvestmentHistory';

const Authenticate = () => {
    const { role } = useSelector((state) => state.auth);

    return (
        <Routes>
            {role === "user" && (
                <>
                    <Route
                        path={AuthenicatedRoutes.USER_DASHBOARD}
                        element={
                            <DashboardMain inner={<UserDashboard />} name="User Dashboard" />
                        }
                    />
                    <Route
                        path={AuthenicatedRoutes.USER_DIRECT_TEAM}
                        element={
                            <DashboardMain inner={<UserDirectTeam />} name="User Direct Team" />
                        }
                    />
                    <Route
                        path={AuthenicatedRoutes.USER_LEVEL_TEAM}
                        element={
                            <DashboardMain inner={<UserLevelTeam />} name="User Level Team" />
                        }
                    />
                    <Route
                        path={AuthenicatedRoutes.USER_REFERRAL_INCOME}
                        element={
                            <DashboardMain inner={<UserReferralIncome />} name="User Referral Income" />
                        }
                    />
                    <Route
                        path={AuthenicatedRoutes.USER_LEVEL_INCOME}
                        element={
                            <DashboardMain inner={<UserLevelIncome />} name="User Level Income" />
                        }
                    />
                    <Route
                        path={AuthenicatedRoutes.USER_ROI_INCOME}
                        element={
                            <DashboardMain inner={<UserRoiIncome />} name="User ROI Income" />
                        }
                    />
                    <Route
                        path={AuthenicatedRoutes.USER_DEPOSIT}
                        element={
                            <DashboardMain inner={<UserDeposit />} name="User Deposit" />
                        }
                    />
                    <Route
                        path={AuthenicatedRoutes.USER_MAKE_INVESTMENT}
                        element={
                            <DashboardMain inner={<UserMakeInvestment />} name="User Make Investment" />
                        }
                    />
                    <Route
                        path={AuthenicatedRoutes.USER_INVESTMENT_HISTORY}
                        element={
                            <DashboardMain inner={<UserInvestmentHistory />} name="User Investment History" />
                        }
                    />


                </>
            )}




            {role === "admin" && (
                <>
                    <Route
                        path={AuthenicatedRoutes.LANDING}
                        element={<Navigate to={AuthenicatedRoutes.ADMIN_DASHBOARD} replace />}
                    />

                    <Route
                        path={AuthenicatedRoutes.ADMIN_DASHBOARD}
                        element={
                            <DashboardMain inner={<AdminDashboard />} name="Admin Dashboard" />
                        }
                    />
                </>
            )}

            {/* <Route
                path="*"
                element={
                    role === "admin"
                        ? <Navigate to="/admin/dashboard" />
                        : <Navigate to="/Login" />
                }
            /> */}
        </Routes>
    );
};

export default Authenticate;
