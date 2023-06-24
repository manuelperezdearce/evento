'use client';

import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

export default function Template({ children }: { children: React.ReactNode }) {
    const { userData } = useSelector((state: RootState) => state.auth);
    useEffect(() => {
        if (Cookies.get().token && !userData) {
            // traer datos de user
            console.log('Hay token y hay que traerse los datos');
        }
        if (!Cookies.get().token) {
            console.log('No hay token');
        }
    }, []);

    return children;
}
