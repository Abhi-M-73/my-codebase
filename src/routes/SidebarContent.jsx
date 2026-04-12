import { ArrowBigDownDash, BadgeDollarSign, BanknoteArrowUp, ChartGantt, CircleDollarSign, CircleUser, Coins, LayoutDashboard, MessageCircleQuestionMark, User } from "lucide-react";
import { AuthenticatedRoutes } from "../routes/Routes";

const SidebarContent = {
    User: [
        {
            id: "Dashboard",
            icon: <LayoutDashboard />,
            name: "Dashboard",
            link: AuthenticatedRoutes.USER_DASHBOARD,
        },
        {
            id: "Team",
            icon: <User />,
            name: "Team",
            options: [
                {
                    id: "Direct Team",
                    name: "Direct Team",
                    link: AuthenticatedRoutes.USER_DIRECT_TEAM,
                },
                {
                    id: "Level Team",
                    name: "Level Team",
                    link: AuthenticatedRoutes.USER_LEVEL_TEAM,
                },
            ],
        },
        {
            id: "Income",
            icon: <Coins />,
            name: "Income",
            options: [
                {
                    id: "Referral Income",
                    name: "Referral Income",
                    link: AuthenticatedRoutes.USER_REFERRAL_INCOME,
                },
                {
                    id: "Level Income",
                    name: "Level Income",
                    link: AuthenticatedRoutes.USER_LEVEL_INCOME,
                },
                {
                    id: "ROI Income",
                    name: "ROI Income",
                    link: AuthenticatedRoutes.USER_ROI_INCOME,
                },
            ],
        },
        {
            id: "Investment",
            icon: <BanknoteArrowUp />,
            name: "Investment",
            options: [
                {
                    id: "Make Investment",
                    name: "Make Investment",
                    link: AuthenticatedRoutes.USER_MAKE_INVESTMENT,
                },
                {
                    id: "Investment History",
                    name: "Investment History",
                    link: AuthenticatedRoutes.USER_INVESTMENT_HISTORY,
                },
                {
                    id: "Deposit",
                    name: "Deposit",
                    link: AuthenticatedRoutes.USER_DEPOSIT,
                },

            ],
        },
        {
            id: "Withdraw",
            icon: <ArrowBigDownDash />,
            name: "Withdraw",
            options: [
                {
                    id: "Withdraw",
                    name: "Withdraw",
                    link: AuthenticatedRoutes.USER_WITHDRAWAL_REQUESTS,
                },
                {
                    id: "Withdraw History",
                    name: "Withdraw History",
                    link: AuthenticatedRoutes.USER_WITHDRAWAL_HISTORY,
                },
            ],
        },
        {
            id: "Support",
            icon: <MessageCircleQuestionMark />,
            name: "Support",
            options: [
                {
                    id: "Raise Ticket",
                    name: "Raise Ticket",
                    link: AuthenticatedRoutes.USER_RAISE_TICKET,
                },
                {
                    id: "Raise Ticket History",
                    name: "Raise Ticket History",
                    link: AuthenticatedRoutes.USER_RAISE_TICKET_HISTORY,
                },
            ],
        },

        {
            id: "Profile",
            icon: <CircleUser />,
            name: "Profile",
            link: AuthenticatedRoutes.USER_PROFILE,
        },
    ],

    Admin: [
        {
            id: "Dashboard",
            icon: <LayoutDashboard />,
            name: "Dashboard",
            link: AuthenticatedRoutes.ADMIN_DASHBOARD,
        },
        {
            id: "Team",
            icon: <User />,
            name: "Team",
            options: [
                {
                    id: "All Team",
                    name: "All Team",
                    link: AuthenticatedRoutes.ADMIN_TEAM,
                },
            ],
        },
        {
            id: "Income Reports",
            icon: <CircleDollarSign />,
            name: "Income Reports",
            options: [
                {
                    id: "Referral Income",
                    name: "Referral Income",
                    link: AuthenticatedRoutes.ADMIN_REFERRAL_INCOME,
                },
                {
                    id: "Level Income",
                    name: "Level Income",
                    link: AuthenticatedRoutes.ADMIN_LEVEL_INCOME,
                },
                {
                    id: "ROI Income",
                    name: "ROI Income",
                    link: AuthenticatedRoutes.ADMIN_ROI_INCOME,
                },
            ],
        },
        {
            id: "Withdraw",
            icon: <ArrowBigDownDash />,
            name: "Withdraw",
            options: [
                {
                    id: "Withdraw Requests",
                    name: "Withdraw Requests",
                    link: AuthenticatedRoutes.ADMIN_WITHDRAWAL_REQUESTS,
                },
            ]
        },
        {
            id: "Topup",
            icon: <BadgeDollarSign />,
            name: "Topup",
            options: [
                {
                    id: "Admin Topup",
                    name: "Admin Topup",
                    link: AuthenticatedRoutes.ADMIN_TOPUP,
                },
                {
                    id: "Admin Topup History",
                    name: "Admin Topup History",
                    link: AuthenticatedRoutes.ADMIN_TOPUP_HISTORY,
                }
            ]
        },
    ],
};

export default SidebarContent;
