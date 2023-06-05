import React from 'react';
import { MuiThemeProvider } from './styles/MuiThemeProvider';
import './globals.css';
import { Hero } from './common/components/Hero';
import { Navbar } from './common/components/Navbar';
import Head from 'next/head';
import { ContainerBody } from './containers/ContainerBody';
import { Providers } from './store/provider';

export const metadata = {
    title: 'EventTo',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <html lang="en">
            <Head>
                <title>NeoVest SignIn</title>
            </Head>
            {/* <Providers> */}
            <body>
                <Providers>
                    <MuiThemeProvider>
                        <Navbar />

                        <Hero />

                        <ContainerBody>{children}</ContainerBody>
                    </MuiThemeProvider>
                </Providers>
            </body>
            {/* </Providers> */}
        </html>
    );
}
