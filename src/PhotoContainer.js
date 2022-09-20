import React from 'react';
import Photo from "./Photo";

const PhotoContainer = props => {
    const displayPhotos = () => {
        return props.photos.map(photo => {
            return <Photo url={photo.mediaUrl} />
        });
    };

    return (
        <>
            <section>{displayPhotos()}</section>
        </>
    );
}
 
export default PhotoContainer;