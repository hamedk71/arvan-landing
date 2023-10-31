import { Inter } from 'next/font/google'
import localFont from 'next/font/local';

export const inter = Inter({
    display: 'swap',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '900'],
    variable: '--font-inter'
})

export const yekanbakh = localFont({
    src: [
        {
            path: '../../public/fonts/yekanbakh/IRANYekanX-Regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../../public/fonts/yekanbakh/IRANYekanX-Medium.woff2',
            weight: '500',
            style: 'normal'
        },
        {
            path: '../../public/fonts/yekanbakh/IRANYekanX-SemiBold.woff2',
            weight: '600',
            style: 'normal'
        },
        {
            path: '../../public/fonts/yekanbakh/IRANYekanX-Bold.woff2',
            weight: '700',
            style: 'normal'
        },
        {
            path: '../../public/fonts/yekanbakh/IRANYekanX-Black.woff2',
            weight: '900',
            style: 'normal'
        },
    ],
    variable: '--font-yekanbakh'
})