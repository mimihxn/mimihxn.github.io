import React from 'react';
import Photo from "./Photo";
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    picGrid: {
        display: 'flex'
    }
})

const PhotoContainer = props => {
    const classes = useStyles();
    console.log(props.photos)

    const displayPhotos = (i,j) => {
        return props.photos.slice(i,j).map(photo => {
            return (
                <Photo url={photo.mediaUrl}/>
            );
        })
    };

    return (
        <div>
            <section className={classes.picGrid}>{displayPhotos(0,3)}</section>
            <section className={classes.picGrid}>{displayPhotos(3,6)}</section>
        </div>
    );
}
 
export default PhotoContainer;