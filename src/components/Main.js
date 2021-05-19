import React from 'react';
import HornedBeast from './HornedBeast'
import Form from 'react-bootstrap/Form'
// import hornsData from './data.json'

class Main extends React.Component {











  render() {
    return (
      <>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>horns</Form.Label>
            <Form.Control as="select" custom name='select' onChange={this.numberOfHorns}>
              <option value='All'>All</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='100'>100</option>
            </Form.Control>
          </Form.Group>
        </Form>

        { this.props.data.map((item, idx) => {
          return (
            <HornedBeast
              key={idx}
              title={item.title}
              image_url={item.image_url}
              description={item.description}
              renderingSelectedAnimal={this.props.renderingSelectedAnimal}
            />
          )
        })}
      </>
    )
  }
}
export default Main;

