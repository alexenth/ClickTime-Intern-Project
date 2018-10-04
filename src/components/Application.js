/*import React, { Component } from "react";
import { request } from "../../api/api";
import { Container } from "reactstrap";
class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientTypes: [shells, baseLayers, mixins, condiments, seasonings],
      shells: [],
      baseLayers: [],
      mixins: [],
      condiments: [],
      seasonings: [],
      tacos: []
    };
    this.updateTacos = this.updateTacos.bind(this);
  }
  updateTacos(value) {
    let tacos = this.state.tacos;
    tacos.append(value);
    this.setState(tacos);
  }

  render() {
    for (var ingr of ingredientTypes) {
      var values = request(ingr);
      console.log("Received list: " + values);
      this.setState({ ingr: values });
    }

    return <div />;
  }
}
export default Application; */
