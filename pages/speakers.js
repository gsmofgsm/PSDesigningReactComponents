import React from 'react';
import Footer from '../src/components/Footer/Footer';
import Header from '../src/components/Header/Header';
import Menu from '../src/components/Menu/Menu';
import Speakers from '../src/components/Speakers/Speakers';
import SpeakerSearchBar from '../src/components/SpeakerSearchBar/SpeakerSearchBar';

export const SpeakerContext = React.createContext({});

function Page() {
    const speakers = [
        {
            imageSrc: 'speaker-component-1124', name: 'Douglas Crockford'
        },
        {
            imageSrc: 'speaker-component-1530', name: 'Tamara Baker'
        },
        {
            imageSrc: 'speaker-component-10803', name: 'Eugene Chuvyrov'
        },
    ];

    return (
        <div>
            <Header />
            <Menu />
            <SpeakerContext.Provider value={speakers}>
                <SpeakerSearchBar />
                <Speakers />
            </SpeakerContext.Provider>
            <Footer />
        </div>
    );
}

export default Page;