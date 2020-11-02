import React from 'react';
import Layout from '../src/components/Layout/Layout';
import Speakers from '../src/components/Speakers/Speakers';

function Page() {
    return (
        <Layout>
            <Speakers bgColor='bg-gray-500' />
        </Layout>
    );
}

export default Page;