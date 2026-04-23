import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import UserDashboard from '../screen/user/UserDashboard';
import DashboardMain from '../layout/DashboardMain';
import AdminDashboard from '../screen/admin/AdminDashboard';
import { useSelector } from 'react-redux';
import { AuthenticatedRoutes, AuthRoutes } from '../routes/Routes';
import UserDirectTeam from '../screen/user/team/UserDirectTeam';
import UserLevelTeam from '../screen/user/team/UserLevelTeam';
import UserReferralIncome from '../screen/user/income/UserReferralIncome';
import UserLevelIncome from '../screen/user/income/UserLevelIncome';
import UserRoiIncome from '../screen/user/income/UserRoiIncome';
import UserDeposit from '../screen/user/payment/UserDeposit';
import UserMakeInvestment from '../screen/user/investment/UserMakeInvestment';
import UserInvestmentHistory from '../screen/user/investment/UserInvestmentHistory';
import UserProfile from '../screen/user/profile/UserProfile';
import UserRaiseTicket from '../screen/user/support/UserRaiseTicket';
import UserRaiseTicketHistory from '../screen/user/support/UserRaiseTicketHistory';
import AdminAllTeam from '../screen/admin/team/AdminAllTeam';
import AdminTopup from '../screen/admin/topup/AdminTopup';
import AdminTopupHistory from '../screen/admin/topup/AdminTopupHistory';
import UserWithdraw from '../screen/user/payment/UserWithdraw';
import UserWithdrawHistory from '../screen/user/payment/UserWithdrawHistory';
import AdminReferralIncome from '../screen/admin/income/AdminReferralIncome';
import AdminRoiIncome from '../screen/admin/income/AdminRoiIncome';
import AdminLevelIncome from '../screen/admin/income/AdminLevelIncome';
import AdminWithdrawalRequests from '../screen/admin/withdrwal/AdminWithdrawalRequests';
import OurPackages from '../screen/user/investment/OurPackages';

const Authenticate = () => {
    const {user} = useSelector((state) => state.auth);
    console.log("Authenticated user:", user);
    const role = "user"
    return (
        <Routes>
            {role === "user" && (
                <>
                    <Route
                        path={AuthenticatedRoutes.USER_DASHBOARD}
                        element={
                            <DashboardMain inner={<UserDashboard />} name="User Dashboard" />
                        }
                    />
                    <Route
                        path={AuthenticatedRoutes.USER_DIRECT_TEAM}
                        element={
                            <DashboardMain inner={<UserDirectTeam />} name="User Direct Team" />
                        }
                    />
                    <Route
                        path={AuthenticatedRoutes.USER_LEVEL_TEAM}
                        element={
                            <DashboardMain inner={<UserLevelTeam />} name="User Level Team" />
                        }
                    />
                    <Route
                        path={AuthenticatedRoutes.USER_REFERRAL_INCOME}
                        element={
                            <DashboardMain inner={<UserReferralIncome />} name="User Referral Income" />
                        }
                    />
                    <Route
                        path={AuthenticatedRoutes.USER_LEVEL_INCOME}
                        element={
                            <DashboardMain inner={<UserLevelIncome />} name="User Level Income" />
                        }
                    />
                    <Route
                        path={AuthenticatedRoutes.USER_ROI_INCOME}
                        element={
                            <DashboardMain inner={<UserRoiIncome />} name="User ROI Income" />
                        }
                    />
                    <Route
                        path={AuthenticatedRoutes.USER_DEPOSIT}
                        element={
                            <DashboardMain inner={<UserDeposit />} name="User Deposit" />
                        }
                    />
                    <Route
                        path={AuthenticatedRoutes.USER_MAKE_INVESTMENT}
                        element={
                            <DashboardMain inner={<UserMakeInvestment />} name="User Make Investment" />
                        }
                    />
                    <Route
                        path={AuthenticatedRoutes.USER_OUR_PACKAGES}
                        element={
                            <DashboardMain inner={<OurPackages />} name="Our Packages" />
                        }
                    />
                    <Route
                        path={AuthenticatedRoutes.USER_INVESTMENT_HISTORY}
                        element={
                            <DashboardMain inner={<UserInvestmentHistory />} name="User Investment History" />
                        }
                    />

                    <Route
                        path={AuthenticatedRoutes.USER_WITHDRAWAL_REQUESTS}
                        element={
                            <DashboardMain inner={<UserWithdraw />} name="User Withdraw" />
                        }
                    />
                    <Route
                        path={AuthenticatedRoutes.USER_WITHDRAWAL_HISTORY}
                        element={
                            <DashboardMain inner={<UserWithdrawHistory />} name="User Withdraw History" />
                        }
                    />

                    <Route
                        path={AuthenticatedRoutes.USER_RAISE_TICKET}
                        element={
                            <DashboardMain inner={<UserRaiseTicket />} name="Raise Ticket" />
                        }
                    />

                    <Route
                        path={AuthenticatedRoutes.USER_RAISE_TICKET_HISTORY}
                        element={
                            <DashboardMain inner={<UserRaiseTicketHistory />} name="Raise Ticket History" />
                        }
                    />




                    <Route
                        path={AuthenticatedRoutes.USER_PROFILE}
                        element={
                            <DashboardMain inner={<UserProfile />} name="User Profile" />
                        }
                    />

                    <Route
                        path="*"
                        element={
                            role === "user"
                                ? <Navigate to={AuthenticatedRoutes.USER_DASHBOARD} />
                                : <Navigate to={AuthRoutes.USER_LOGIN} />
                        }
                    />
                </>
            )}


            {role === "admin" && (
                <>
                    <Route
                        path={AuthenticatedRoutes.LANDING}
                        element={<Navigate to={AuthenticatedRoutes.ADMIN_DASHBOARD} replace />}
                    />

                    <Route
                        path={AuthenticatedRoutes.ADMIN_DASHBOARD}
                        element={
                            <DashboardMain inner={<AdminDashboard />} name="Admin Dashboard" />
                        }
                    />
                    <Route
                        path={AuthenticatedRoutes.ADMIN_TEAM}
                        element={
                            <DashboardMain inner={<AdminAllTeam />} name="All Team" />
                        }
                    />
                    <Route
                        path={AuthenticatedRoutes.ADMIN_TOPUP}
                        element={
                            <DashboardMain inner={<AdminTopup />} name="Admin Topup" />
                        }
                    />
                    <Route
                        path={AuthenticatedRoutes.ADMIN_TOPUP_HISTORY}
                        element={
                            <DashboardMain inner={<AdminTopupHistory />} name="Admin Topup History" />
                        }
                    />
                    <Route
                        path={AuthenticatedRoutes.ADMIN_REFERRAL_INCOME}
                        element={
                            <DashboardMain inner={<AdminReferralIncome />} name="Admin Referral Income" />
                        }
                    />

                    <Route
                        path={AuthenticatedRoutes.ADMIN_ROI_INCOME}
                        element={
                            <DashboardMain inner={<AdminRoiIncome />} name="Admin ROI Income" />
                        }
                    />
                    <Route
                        path={AuthenticatedRoutes.ADMIN_LEVEL_INCOME}
                        element={
                            <DashboardMain inner={<AdminLevelIncome />} name="Admin Level Income" />
                        }
                    />
                    <Route
                        path={AuthenticatedRoutes.ADMIN_WITHDRAWAL_REQUESTS}
                        element={
                            <DashboardMain inner={<AdminWithdrawalRequests />} name="Admin Withdrawal Requests" />
                        }
                    />
                </>
            )}

            <Route
                path="*"
                element={
                    role === "admin"
                        ? <Navigate to={AuthenticatedRoutes.ADMIN_DASHBOARD} />
                        : <Navigate to={AuthRoutes.ADMIN_LOGIN} />
                }
            />
        </Routes>
    );
};

export default Authenticate;
