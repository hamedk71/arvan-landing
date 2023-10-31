import Layout from '@/components/layout';
import { inter, yekanbakh } from '@/config/font';
import Head from 'next/head';
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(<>
    <style jsx global>{`
        html {
          font-family: ${yekanbakh.style.fontFamily};
        }
        :lang(en){
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
    <Head>
      <meta name="theme-color" content="#ffffff" />
      <title>ابرآروان</title>
      <meta name="description" content="ابر آروان شرکتی های تک در حوزه‌ فناوری ابری (کلود) در ایران است که محصولاتی مانند شبکه توزیع محتوا (CDN)، سرور ابری، فضای ابری، کانتینر ابری (سکوی ابری) و پلتفرم ویدیو به کسب‌وکارها ارایه می‌دهد." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </>)
}
