import React from "react"
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from "components/Header/Header"

function Layout() {
    return (<>
        <Header />
        <main><Suspense fallback={null}>
        <Outlet />
      </Suspense></main>
    </>)
};

export default Layout