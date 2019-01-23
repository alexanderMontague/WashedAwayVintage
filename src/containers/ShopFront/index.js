import React, { Component } from "react";
import styles from "./ShopFront.scss";

import Header from "../../components/Header";
import Item from "../../components/Item";
import Footer from "../../components/Footer";

class StoreFront extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.contentContainer}>
          <Item />
          <Item />
          <Item />
        </div>
        <Footer />
      </div>
    );
  }
}

export default StoreFront;
