import React, { Component } from "react";
import { request } from "./api.js";
import SelectionList from "./components/SelectionList.jsx";
import Info from "./components/Info";
import TacoSentence from "./components/TacoSentence";
import { Container } from "reactstrap";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientTypes: [
        "shells",
        "baseLayers",
        "mixins",
        "condiments",
        "seasonings"
      ],

      //These lists are retrieved from the api calls
      shells: [],
      baseLayers: [],
      mixins: [],
      condiments: [],
      seasonings: [],

      //These lists are lifted from the SelectionList
      selectedshells: [],
      selectedbaseLayers: [],
      selectedmixins: [],
      selectedcondiments: [],
      selectedseasonings: [],

      //Final list of confirmed taco objects
      tacos: []
    };
    this.updateTacos = this.updateTacos.bind(this);
    this.handleIngredientChange = this.handleIngredientChange.bind(this);
  }

  //Adds taco to order when user hits "add taco to list.." button
  updateTacos(value) {
    this.setState(prevState => ({
      tacos: [...prevState.tacos, value]
    }));
  }

  handleIngredientChange(ingredientName, selectedValues) {
    //This will update the appropriate state list to the users choices
    this.setState({ ["selected" + ingredientName]: selectedValues });
  }
  async componentDidMount() {
    //Reads api calls for each ingredient type into state
    //This is an async function, page will wait for api reply to render
    try {
      for (var i = 0; i < this.state.ingredientTypes.length; i++) {
        let response = await request(this.state.ingredientTypes[i]);
        this.setState({ [this.state.ingredientTypes[i]]: response });
      }
    } catch (error) {
      this.setState({
        error
      });
    }
  }
  render() {
    //Generates SelectionLists based off of response
    let ingredientComponents = [];
    for (var j = 0; j < this.state.ingredientTypes.length; j++) {
      ingredientComponents.push(
        <SelectionList
          key={j}
          list={this.state[this.state.ingredientTypes[j]]}
          ingredient={this.state.ingredientTypes[j]}
          onIngredientChange={this.handleIngredientChange}
        />
      );
    }

    //Generates list of tacos to sit below table
    let listTacos = this.state.tacos.map(d => <li key={d}>{d}</li>);

    console.log(this.state);
    return (
      <Container id="Application">
        <Info />
        {ingredientComponents}
        <TacoSentence
          addTaco={this.updateTacos}
          selectedshells={this.state.selectedshells}
          selectedbaseLayers={this.state.selectedbaseLayers}
          selectedmixins={this.state.selectedmixins}
          selectedcondiments={this.state.selectedcondiments}
          selectedseasonings={this.state.selectedseasonings}
        />
        {listTacos}
      </Container>
    );
  }
}
export default Application;
