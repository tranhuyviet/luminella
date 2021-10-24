import React from 'react';
import Hero from '../components/hinnasto/Hero';
import List from '../components/hinnasto/List';
import client from '../apolloClient';
import { gql } from '@apollo/client';

const Hinnasto = ({ hinnastos }) => {
    return (
        <div className='sectionWrap'>
            <Hero />
            <List hinnastos={hinnastos} />
        </div>
    );
};

export default Hinnasto;

export async function getStaticProps() {
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
}
