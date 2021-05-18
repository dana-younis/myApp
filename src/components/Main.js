import React from 'react';
import HornedBeast from './HornedBeast'
// import hornsData from './data.json'
class Main extends React.Component {
    render() {
        return (
            <>
                { this.props.data.map((item, idx) => {
                    return (
                        <HornedBeast
                            key={idx}
                            title={item.title}
                            image_url={item.image_url}
                            description={item.description}
                            renderingSelectedAnimal= {this.props.renderingSelectedAnimal}
                        />
                    )
                })}
            </>
        )
    }
}
export default Main;