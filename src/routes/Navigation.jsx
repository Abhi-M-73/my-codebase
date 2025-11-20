import React from 'react'
import ScrollToTop from '../components/ui/ScrollToTop';
import Auth from './Auth';
import Authenticate from './Authenticate';
import { useSelector } from 'react-redux';

const Navigation = () => {
    const authInfo = useSelector((state) => state.auth);
    const token = authInfo.token || null;

    return (
        <>
            <ScrollToTop />
            {token === null || token === "" || token === undefined ? (
                <Auth />
            ) : (
                <Authenticate />
            )}
        </>
    )
}

export default Navigation
