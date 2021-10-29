import React from 'react';
import Hero from '../components/hinnasto/Hero';
import List from '../components/hinnasto/List';
import Head from 'next/head';
// import client from '../apolloClient';
// import { gql } from '@apollo/client';
import { request, gql } from 'graphql-request';

const Hinnasto = ({ hinnastos }) => {
    return (
        <div className='py-8 md:py-16'>
            <Head>
                <title>
                    Hinnasto | Hyvinvointi- ja Kauneushoitola Luminella
                </title>
                <meta
                    name='description'
                    content='Hyvinvointi- ja Kauneushoitola Luminella'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Hero />
            <List hinnastos={hinnastos} />
        </div>
    );
};

export default Hinnasto;

export async function getServerSideProps() {
    // use graphql-resquest
    const endpoint = process.env.ENDPOINT;

    const query = gql`
        query {
            hinnastos(orderBy: order_ASC) {
                category
                order
                hinnastoItems {
                    name
                    price
                }
            }
        }
    `;

    const data = await request(endpoint, query);

    return {
        props: { hinnastos: data.hinnastos },
    };

    // use apollo client
    /* 
    const { data } = await client.query({
        query: gql`
            query {
                hinnastos {
                    category
                    order
                    hinnastoItems {
                        name
                        price
                    }
                }
            }
        `,
    });

    return {
        props: { hinnastos: data.hinnastos },
    };
    */
}
