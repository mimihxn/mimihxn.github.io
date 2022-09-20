import React from 'react';

const Photo = (props) => {
    return ( 
        <section>
            <img src={props.url} alt="ig photo" />
        </section>
     );
}
 
export default Photo;