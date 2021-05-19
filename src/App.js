import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast';
import data from './components/data.json';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data,
      show: false,
      selectedAnimal: {},
    }
  }

  hideModal = () => {
    this.setState({ show: false, selectedAnimal: {} });
  }
  renderingSelectedAnimal = (title) => {
    let selectedAnimal = data.find(beast => {
      if (beast.title === title) {
        return beast
      }
    })
    this.setState({
      show: true,
      selectedAnimal: selectedAnimal
    })
  }
  renderApp = (value) => {
    this.setState({
      data: value
    })
  }




  render() {
    return (
      <div>
        <Header />
        <Main data={this.state.data} renderingSelectedAnimal={this.renderingSelectedAnimal} renderApp={this.renderApp} />
        <SelectedBeast show={this.state.show} selectedAnimal={this.state.selectedAnimal}
          handleClose={this.hideModal}
        />
        <Footer />
      </div>
    )
  }
}
export default App;