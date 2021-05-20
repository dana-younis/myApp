import React from 'react';
import HornedBeast from './HornedBeast'

import data from './data.json'
import Form from 'react-bootstrap/Form'

class Main extends React.Component {




    filterHorns = (event) => {
        let filterHorns = event.target.value;
        let hornsArray;
        if (filterHorns) {
            hornsArray = data.filter((item) => {
                if (filterHorns == item.horns) {
                    return item
                }
                if (filterHorns == 'All') {
                    return data
                }


            })

        }

        this.props.renderApp(hornsArray);
    }












    render() {
        return (
            <>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>horns</Form.Label>
                        <Form.Control as="select" custom name='select' onChange={this.filterHorns}>
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