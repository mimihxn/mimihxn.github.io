import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    subheading: {
        marginBottom: 3,
    },

    recentSong: {
        display: 'flex'
    },

    artist: {
        fontSize: 20,
        margin: '10px 20px',
        '@media (max-width: 768px)': {
            fontSize: 24,
        },
    },

    title: {
        fontSize: 15,
        margin: '10px 20px',
        maxWidth: '20vw',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        '@media (max-width: 768px)': {
            maxWidth: '50vw',
        },
    },

    recentSongLink: {
        textDecoration: 'none',
        color: 'gray',
        '&:hover': {
            color: 'black'
        },
    },

    albumArt: {
        width: 120,
        height: 120,
    },

    smallTest: {
        fontSize: 12,
        marginTop: 3,
    }
});

function RecentSong() {
    const [recentSong, setRecentSong] = useState(null);
    const classes = useStyles();

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://ws.audioscrobbler.com/2.0',
            params: {
                method: 'user.getrecenttracks',
                user: 'nakedguac',
                api_key: '6c2f4cde5a70abbc7df1b42987aec0de',
                format: 'json',
            },
        }).then((res) => {
            const recentTrack = res.data.recenttracks.track[0];
            const newSong = {
                artist: recentTrack.artist['#text'],
                title: recentTrack.name,
                imageSrc:recentTrack.image[2]['#text'],
                songLink: recentTrack.url,
            };
            setRecentSong(newSong);
        });
    }, []);

    if (!recentSong) {
        return null;
    }

    return (
        <>
            <h3 className={classes.subheading}>my most recently played song</h3>
            <p className={classes.smallTest}>(hopefully it's not embarrassing)</p>
            <a
                target="_blank"
                rel = "noreferrer"
                className={classes.recentSongLink}
                href={recentSong.songLink}
            >
                <div className={classes.recentSong}>
                    <img 
                        className={classes.albumArt}
                        src={recentSong.imageSrc}
                        alt="album art"
                        loading="lazy"
                    />
                    <div>
                        <h3 className={classes.artist}>{recentSong.artist}</h3>
                        <p className={classes.title}>{recentSong.title}</p>
                    </div>
                </div>
            </a>
        </>
    );
}

export default RecentSong;