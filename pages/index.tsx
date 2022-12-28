import React from 'react';
import Header from 'next/head';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';

/*
:--------------------------------------------------------------------------
: Page Construction
:--------------------------------------------------------------------------
*/

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
                <title>
                    O desejo pelo conhecimento molda ao homem | Vorlefan
                </title>
            </Header>
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
