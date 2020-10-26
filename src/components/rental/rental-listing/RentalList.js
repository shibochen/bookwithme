import React, { Component } from "react";
import RentalCard from "./RentalCard";


export class RentalList extends Component {
  render() {
    return <div className="row">{this.rentalRentals()}</div>;
  }

  rentalRentals() {
    return this.props.rentals.map((rental, index) => {
      return (
        <RentalCard key={index} colNum="col-md-3 col-xs-6" rental={rental} />
      );
    });
  }
}

export default RentalList;
