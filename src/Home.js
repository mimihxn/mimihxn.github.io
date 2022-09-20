import RecentSong from "./RecentSong";
import React from 'react';
import { createUseStyles } from 'react-jss';
import RecentPic from "./RecentPic";

const useStyles = createUseStyles({
    logo: {
        fontSize: 50,
    },
    content: {
        marginLeft: 50,
        marginRight: 50
    },
    bio: {
        // display: "flex",
        marginTop: 30,
    },
    text: {

    },
    musicphoto: {
        marginTop: 30,
        display: "flex"
    },
    icon: {
        marginRight: 20,
    }
});

const ICONS = [
    {
        link: "https://www.linkedin.com/in/han-mimi-nguyen/",
        icon: "https://imgs.search.brave.com/_h2cUFzpOVe2SBVybuOuXDHgANKiUr9zHbfZRqhTFBs/rs:fit:980:980:1/g:ce/aHR0cHM6Ly9jZG4u/b25saW5ld2ViZm9u/dHMuY29tL3N2Zy9p/bWdfNDQ3MjMucG5n",
        desc: "linkedin profile"
    },

    {
        link: "https://drive.google.com/file/d/1C8bJCowHWujhoMY4bQ1osl7I6dIbODBO/view?usp=sharing",
        icon: "https://imgs.search.brave.com/XS1PQDToIq7-koaLvS4HMci3SEhL_a5HtgER77P5OnM/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4w/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZGlnaXRhbC1t/YXJrZXRpbmctMi0x/My81MC8xMjItNTEy/LnBuZw",
        desc: "resume"
    },

    {
        link: "https://github.com/hnbnguyen",
        icon: "https://imgs.search.brave.com/xzKOD-4sj1kj_paDDdS1eZmHyBACOXggT4F73QwEGnM/rs:fit:981:956:1/g:ce/aHR0cHM6Ly9jZG4u/b25saW5ld2ViZm9u/dHMuY29tL3N2Zy9p/bWdfNDQ2MDUucG5n",
        desc: "github profile"
    },

    {
        link: "https://www.instagram.com/vision5th/",
        icon: "https://imgs.search.brave.com/-sgLl8E6hkay7lRc4fG5XM_T5teuGhkgh3PHsaY6Qvo/rs:fit:475:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC51/MU5zMmRlTnJZZVct/eFdYLWpKQzVBSGFI/WiZwaWQ9QXBp",
        desc: "film photography account"
    }
];

const CURRENTLY_WORKING_ON = [
    'Building "Final Minutes", a social media app that can only be accessed with less than 10% battery',
    'Reading Jonathan Haidt and Scott Young on Antifragility and Ultralearning',
    'Finding new music & podcasts',
];

const PEOPLE_WHO_INSPIRE_ME = [
    'Dries Depoorter - Making art installations using technology as the medium',
    'Tristan Harris - Founder of Center for Humane Technology',
    'Tim Coughlan - My highschool history teacher',
];

const Home = () => {
    const classes = useStyles();

    return ( 
        <div className={classes.content}>
            
            <h1 className={classes.logo}>mimi nguyen</h1>

            <h2>
                product &amp; software engineer | QueensU CS | prev @ AWS, Tauria
            </h2>

            <div>
                {ICONS.map(({link, icon, desc}) => (
                    <a
                        target = "_blank"
                        rel = "noreferrer"
                        href = {link}
                    >
                        <img
                            src={icon}
                            className={classes.icon}
                            width = "30"
                            height = "30"
                            alt= {desc}
                        />
                    </a>
                ))}
            </div>
            
            <div className={classes.bio}>
                <div>
                    <h2>what i've been up to these days</h2>
                    <ul>
                        {CURRENTLY_WORKING_ON.map((item) => <li>{item}</li>)}
                    </ul>
                </div>

                <div>
                    <h2>people that inspire me</h2>
                    <ul>
                        {PEOPLE_WHO_INSPIRE_ME.map((item) => <li>{item}</li>)}
                    </ul>
                </div>
            </div>

            <div className={classes.musicphoto}>
                <div>
                    <RecentSong />
                </div>

                <div>
                    <RecentPic />
                </div>
            </div>
        </div>
     );
}
 
export default Home;