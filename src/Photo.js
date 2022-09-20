import React from 'react';

const Photo = (props) => {
    return ( 
        <div>
            <img src={props.url} alt="ig photo" width="250" height="250"/>
        </div>
     );
}
 
export default Photo;