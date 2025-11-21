import { Coins, LayoutDashboard, User } from "lucide-react";
import { AuthenicatedRoutes } from "./routes";
import { AiFillMoneyCollect } from "react-icons/ai";

const SidebarContent = {
    User: [
        {
            id: "Dashboard",
            icon: <LayoutDashboard />,
            name: "Dashboard",
            link: AuthenicatedRoutes.USER_DASHBOARD,
        },
        {
            id: "Team",
            icon: <User />,
            name: "Team",
            options: [
                {
                    id: "Direct Team",
                    name: "Direct Team",
                    link: AuthenicatedRoutes.USER_DIRECT_TEAM,
                },
                {
                    id: "Level Team",
                    name: "Level Team",
                    link: AuthenicatedRoutes.USER_LEVEL_TEAM,
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
                    link: AuthenicatedRoutes.USER_REFERRAL_INCOME,
                },
                {
                    id: "Level Income",
                    name: "Level Income",
                    link: AuthenicatedRoutes.USER_LEVEL_INCOME,
                },
                {
                    id: "ROI Income",
                    name: "ROI Income",
                    link: AuthenicatedRoutes.USER_ROI_INCOME,
                },
            ],
        },
    ],

    Admin: [
        {
            id: "Dashboard",
            icon: <LayoutDashboard />,
            name: "Dashboard",
            link: AuthenicatedRoutes.ADMIN_DASHBOARD,
        },
        {
            id: "Level",
            icon: <LayoutDashboard />,
            name: "Level",
            options: [
                {
                    id: "Level1",
                    name: "Level1",
                    link: "/level/level1",
                },
                {
                    id: "Level2",
                    name: "Level2",
                    link: "/level/level2",
                },
            ],
        },
    ],
};

export default SidebarContent;
