const SpeakerFavoriteButton = ({isFavorite, onFavoriteToggle}) => (
    <div
    className={isFavorite ? 'heartredbutton' : 'heartdarkbutton'}
    onClick={onFavoriteToggle}
    ></div>
);

export default SpeakerFavoriteButton;