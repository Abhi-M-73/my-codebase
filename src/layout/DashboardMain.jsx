import React from "react";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const DashboardMain = ({ inner, name = "user", }) => {
    const { role, username, email } = useSelector((state) => state.auth?.user);
    const roleKey = role;

    return (
        <div className="min-h-screen bg-gray-950">
            <Sidebar userRole={roleKey} />
            <div className="lg:ml-64">
                <div className="">
                    <DashboardHeader name={name} email={email} username={username} />
                    <main className="p-5">
                        {inner}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default DashboardMain;
