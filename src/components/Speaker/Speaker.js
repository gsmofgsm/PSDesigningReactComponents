import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import SpeakerFavoriteButton from '../SpeakerFavoriteButton/SpeakerFavoriteButton';
import SpeakerImage from '../SpeakerImage/SpeakerImage';

const SpeakerComponent = ({ id, firstName, lastName, bio, isFavorite, put }) => (
    <div className="rounded overflow-hidden shadow-lg p-6 bg-white" key={id}>
        <div className="grid grid-cols-4 mb-6">
        <div className="font-bold text-lg col-span-3">{`${firstName} ${lastName}`}</div>
        <div className="flex justify-end">
            <SpeakerFavoriteButton isFavorite={isFavorite} 
                onFavoriteToggle={() => {
                    put({
                        id,
                        firstName,
                        lastName,
                        bio,
                        isFavorite: !isFavorite,
                    });
                }}/>
        </div>
        </div>
        <div className="mb-6">
            <SpeakerImage id={id} />
        </div>
        <div className="text-gray-600">{bio.substr(0, 70) + '...'}</div>
    </div>
);

const Speaker = React.memo((props) => {
    return (
        <ErrorBoundary errorUI={<div>Something went Wrong in the Speaker Card</div>}>
            <SpeakerComponent {...props} />
        </ErrorBoundary>
    );
});

export default Speaker;
