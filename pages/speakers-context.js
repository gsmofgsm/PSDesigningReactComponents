import React, { useContext } from 'react';
import { SpeakersContext, SpeakersProvider } from '../src/context/SpeakersContext';

const SpeakersComponent = () => {
    const speakers = useContext(SpeakersContext);
    return (
        <div>
            {speakers.map(({imageSrc, name}) => {
                return <img src={`/images/${imageSrc}.png`} alt={name} key={imageSrc}></img>
            })}
        </div>
    );
};

const Speakers = () => {
    return (
        <SpeakersProvider>
            <SpeakersComponent></SpeakersComponent>
        </SpeakersProvider>
    )
}

export default Speakers;