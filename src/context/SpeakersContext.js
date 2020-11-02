import React, {createContext} from 'react';
import Speakers from '../components/Speakers/Speakers';
const SpeakersContext = createContext();

const SpeakersProvider = ({ children }) => {
    const speakers = [
        { imageSrc: 'speaker-component-1124', name: 'Douglas Crockford' },
        { imageSrc: 'speaker-component-1530', name: 'Tamara Baker' },
        { imageSrc: 'speaker-component-10803', name: 'Eugene Chuvyrov' },
    ];

    return (
        <SpeakersContext.Provider value={speakers}>
            {children}
        </SpeakersContext.Provider>
    );
};

export { SpeakersContext, SpeakersProvider };