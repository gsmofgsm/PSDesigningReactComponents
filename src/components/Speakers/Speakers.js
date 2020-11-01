import React, {useContext} from 'react';
import { SpeakerContext } from '../../../pages/speakers';

const Speakers = () => {
    const speakers = useContext(SpeakerContext);
    return (
        <div>
            {speakers.map(({imageSrc, name}) => {
                return <img src={`/images/${imageSrc}.png`}
                    alt={name} key={imageSrc} />
            })}
        </div>
    )
};

export default Speakers;