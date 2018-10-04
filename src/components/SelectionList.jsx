import React, { Component } from "react";
import Select from "react-select";
import { Card, CardTitle, CardBody } from "reactstrap";
export default class SelectionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    let selected = this.state.selectedItems;
    console.log(event);
    selected = event;
    this.setState({ selectedItems: selected });

    this.props.onIngredientChange(this.props.ingredient, selected);
  }
  render() {
    var options = [];
    for (var i = 0; i < this.props.list.length; i++) {
      options.push({
        value: this.props.list[i].slug,
        label: this.props.list[i].name
      });
    }
    let ingredientLabel = this.props.ingredient;
    if (ingredientLabel === "baseLayers") ingredientLabel = "base layers";
    //Generates ToggleButtons based off of items received from api request
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>Choose {ingredientLabel}</CardTitle>
            <Select
              value={this.state.selectedItems}
              onChange={this.handleChange}
              isMulti="true"
              options={options}
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}
