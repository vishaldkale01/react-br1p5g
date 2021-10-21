import { Component } from 'raect';
export default class Product extends Component {
  brand = 'dell';
  getData() {
    console.log('get Data');
    return this.getData();
  }
  render() {
    <div>
      {this.getData()}
      <h1>{this.brand}</h1>
      <p>My 1st Page </p>
    </div>;
  }
}
