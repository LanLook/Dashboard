import React from 'react'
import Body from './Body'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { states :
        {demography: true, housing: false,communications: false, accidents: false}};
  }


  render() {
    return (
    <div className="App">
      <header className="App-header">
      <h1 className="title">Сайт статистики аварийного жилья</h1>
        <nav>
          <span className= "header" id = "demography" onClick={
            () => {this.setState({states :{demography: true, housing: false,communications: false, accidents: false}})} }>Демография</span>
          <span className= "header" id = "housing" onClick={
            () => {this.setState({states : {demography: false, housing: true,communications: false, accidents: false}})}}>Жилье</span>
          <span className= "header" id = "communications" onClick={
            () => {this.setState({states : {demography: false, housing: false,communications: true, accidents: false}})}}>Коммуникации</span>
          <span className= "header" id = "accidents" onClick= {
            () => {this.setState({states : {demography: false, housing: false,communications: false, accidents: true}})}}>Аварии</span>
        </nav>
      </header>
    <Body tabStates={this.state.states}/>
    </div>
  );
}
}


export default (App);
