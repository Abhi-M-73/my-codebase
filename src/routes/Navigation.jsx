import React from 'react'
import ScrollToTop from '../components/ui/ScrollToTop';
import Auth from './Auth';
import Authenticate from './Authenticate';
import { useSelector } from 'react-redux';

const Navigation = () => {
    const { token } = useSelector((state) => state.auth);

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
