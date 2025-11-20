// src/routes/SidebarContent.jsx
import { LayoutDashboard } from "lucide-react";
import { AuthenicatedRoutes } from "./routes";

const SidebarContent = {
    User: [
        {
            id: "Dashboard",
            icon: <LayoutDashboard />,
            name: "Dashboard",
            link: AuthenicatedRoutes.USER_DASHBOARD,
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
