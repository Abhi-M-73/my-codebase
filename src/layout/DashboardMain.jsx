import React from "react";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const DashboardMain = ({ inner, name = "user", }) => {
    const authInfo = useSelector((state) => state.auth);
    const roleKey = authInfo.role || "user";

    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar userRole={roleKey} />
            <div className="lg:ml-64">
                <div className="p-5">
                    <DashboardHeader name={name} />
                    <main className="mt-6">
                        {inner}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default DashboardMain;
