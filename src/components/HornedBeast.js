  
import React from 'react';


class HornedBeast extends React.Component {
    render() {
        return(
            <div >{this.props.title};
            {this.props.image_url};
            {this.props.description};

            </div>

        )
    }
}

export default HornedBeast ;