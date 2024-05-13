import { useState } from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import css from "./products.module.css";

const Products = () => {
  const [productsItem, setProductsItem] = useState(ProductsData);
  const [animationParent] = useAutoAnimate()

  const typeFilter = (type) =>{
    setProductsItem(ProductsData.filter((product) =>product.type == type))
  }
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <img src={Plane} alt="Heading Image" />
        <h1>Our Featured Products</h1>
      </div>
      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() =>setProductsItem(ProductsData)} >All</li>
          <li onClick={() =>typeFilter("skin care")} >Skin Care</li>
          <li onClick={() =>typeFilter("conditioner")} >Conditioners</li>
          <li onClick={() =>typeFilter("foundation")} >Foundations</li>
        </ul>

        <div className={css.list} ref={animationParent}>
          {productsItem.map((product, index) => {
            return (
              <div className={css.product} key={index}>
                <div className="left_s">
                  <div className="name">
                    <span>{product.name}</span>
                    <span>{product.detail}</span>
                  </div>
                  <span>$ {product.price}</span>
                  <div>Shop now</div>
                </div>
                <img src={product.img} alt="products Image" className="slide_img" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
