import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


class HornedBeast extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {
            number: 0
        }
    }
    counter = () => {
        this.setState({
            number: this.state.number + 1,
    })
}



renderingSelectedAnimal = () => {
    this.props.renderingSelectedAnimal(this.props.title)
}
    render() {
        return (
            <div>
            <Card style={{ width: '18rem' }}>
              
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Img onClick={this.renderingSelectedAnimal} src={this.props.image_url} />
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>         
                                   <Card.Text>
                    favourit👨‍🎤️:{this.state.number}
                    </Card.Text>
                    <Button  onClick={this.counter}variant="primary">pick</Button>
                </Card.Body>
            </Card>
              </div>        )
    }
}
export default HornedBeast;