import React, { Component } from "react";
import { Button } from "reactstrap";
class TacoSentence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taco: ""
    };
    this.updateTaco = this.updateTaco.bind(this);
  }

  updateTaco(value) {}
  render() {
    function createDescription(array) {
      if (array.length === 0) return "nothing";
      let ret = "";
      for (let i = 0; i < array.length - 1; i++) {
        ret += array[i].label + ", ";
      }
      if (array.length > 1) ret += "and ";
      ret += array[array.length - 1].label;
      return ret;
    }
    let shellsDescrip = "no shell";
    if (this.props.selectedshells.length > 0)
      shellsDescrip = createDescription(this.props.selectedshells);
    let baseLayerDescrip = createDescription(this.props.selectedbaseLayers);
    let mixinsDescrip = createDescription(this.props.selectedmixins);
    let condimentsDescrip = createDescription(this.props.selectedcondiments);
    let seasoningsDescrip = createDescription(this.props.selectedseasonings);
    let taco =
      shellsDescrip +
      ", filled with " +
      baseLayerDescrip +
      ", mixed with " +
      mixinsDescrip +
      ", topped with " +
      condimentsDescrip +
      ", and seasoned with " +
      seasoningsDescrip +
      ".";

    return (
      <div>
        <p>Your order: A delicious taco made with {taco}</p>
        <br />
        <Button onClick={() => this.props.addTaco(taco)}>
          Add taco to list...
        </Button>
      </div>
    );
  }
}

export default TacoSentence;
