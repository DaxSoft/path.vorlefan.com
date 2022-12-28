import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '$/styles/theme';
import createEmotionCache from '$/styles/createEmotionCache';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props;

    const router = useRouter();

    // React.useEffect(() => {
    //     // Remove the server-side injected CSS.
    //     const jssStyles = document.querySelector('#jss-server-side');
    //     if (jssStyles) {
    //         jssStyles?.parentElement?.removeChild(jssStyles);
    //     }
    // }, []);

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}

                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};

// export default function MyApp(props: MyAppProps) {
//     const {
//         Component,
//         emotionCache = clientSideEmotionCache,
//         pageProps,
//     } = props;
//     return (
//         <CacheProvider value={emotionCache}>
//             <Head>
//                 <title>My page</title>
//                 <meta
//                     name="viewport"
//                     content="minimum-scale=1, initial-scale=1, width=device-width"
//                 />
//             </Head>
//             <ThemeProvider theme={theme}>
//                 {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//                 <CssBaseline />
//                 <Component {...pageProps} />
//             </ThemeProvider>
//         </CacheProvider>
//     );
// }
