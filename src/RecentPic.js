import React, { Component } from 'react';
import PhotoContainer from './PhotoContainer';

class RecentPic extends Component {
    constructor() {
        super();

        this.state = {
            feedPhotos: []
        };
    }
    componentDidMount() {
        fetch('https://feeds.behold.so/drwJ31jNC53U20g7TWVp')
            .then(data => data.json())
            .then(photos => {
                this.setState({feedPhotos : photos});
            })
            .catch(err => {
                throw Error(err.message);
            });
    }

    render() {
        return (
            <section className='recentPic'>
                <h3>my most recent film photos</h3>
                <PhotoContainer photos={this.state.feedPhotos} />
            </section>
        );
    }
}

export default RecentPic;