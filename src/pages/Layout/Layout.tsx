import React from 'react';
import { Outlet } from "react-router-dom";

type LayoutProps = {
    children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="bg-gray-300">
            {children}
            {/* <Outlet /> */}
        </div>
    )
}

export default Layout;