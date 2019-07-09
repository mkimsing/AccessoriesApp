import React, { Component } from "react";
import Common from "../components/Common";
import axios from "axios";

const Url = ``;

export default class GalleryCtrl extends Component {
  state = {
    products: []
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get(Url).then(product => {
      const newProducts = product.data.map(productList => {
        return {
          id: productList.id,
          title: productList.title,
          price: productList.price,
          promo: productList.promo,
          stars: productList.stars,
          image: productList.thumb,
          model: productList.model,
          description: productList.description,
          sizing: productList.sizing,
          materials: productList.materials,
          environment: productList.environment,
          reviews: []
        };
      });
      const sortedProducts = newProducts.sort(
        (a, b) => parseFloat(b.promo) - parseFloat(a.promo)
      );
      const filteredProducts = sortedProducts.slice(0, 9);
      this.setState({
        products: filteredProducts
      });
    });
    console.log(this.state.products);
  }

  render() {
    return (
      <>
        {this.state.products.map(product => (
          <Common
            id={product.id}
            title={product.title}
            price={product.price}
            stars={product.stars}
            image={product.thumb}
            model={product.model}
            description={product.description}
            sizing={product.sizing}
            materials={product.materials}
            environment={product.environment}
          />
        ))}
      </>
    );
  }
}
