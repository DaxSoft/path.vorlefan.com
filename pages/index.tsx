import React from 'react';
import Header from 'next/head';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';

/*
:--------------------------------------------------------------------------
: Page Construction
:--------------------------------------------------------------------------
*/

import { default as PageComponent } from '$/client/pages/homepage/dynamic';

/*
:--------------------------------------------------------------------------
: Page Component
:--------------------------------------------------------------------------
*/

type PageProps = {};

const Page = ({}: PageProps) => {
    return (
        <div>
            <Header>
                <title>PathRoute | Vorlefan</title>
            </Header>
            <PageComponent />
        </div>
    );
};

/*
:--------------------------------------------------------------------------
: Page Component - Handler Initial
:--------------------------------------------------------------------------
*/
export async function getStaticProps(
    context: GetStaticPropsContext
): Promise<GetStaticPropsResult<PageProps>> {
    return {
        props: {},
    };
}
/*
:--------------------------------------------------------------------------
: Export
:--------------------------------------------------------------------------
*/

export default Page;
