import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {
            number: 0
        }




    }
    counter = () => {
        this.setState(
            {
                number: this.state.number + 1
            }
        )
    }


    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>

                        <Card.Img onClick={this.counter} src={this.props.image_url} />
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                            favourit👨‍🎤️:{this.state.number}
                        </Card.Text>

                    </Card.Body>
                </Card>


            </div>

        )
    }
}

export default HornedBeast;