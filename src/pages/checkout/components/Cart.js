import React, { useState } from 'react';
// import CartProduct from './CartProduct';
import util from '../util';

// import './style.scss';

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
    bag :{
        width: 40,
        height: 40,
        position: "relative",
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 15,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center"
    },     
    float_cart :{
        position: "fixed",
        top: 0,
        right: -450,
        width: 450,
        height: "100%",
        backgroundColor: "#1b1a20",
        boxSizing: "border-box",      
        transition: "right 0.2s",
    },
}))


export default function Projec( props) {

const [isOpen, setisOpen]=useState(false)


//   componentWillReceiveProps(nextProps) {
//     if (nextProps.newProduct !== this.props.newProduct) {
//       this.addProduct(nextProps.newProduct);
//     }

//     if (nextProps.productToRemove !== this.props.productToRemove) {
//       this.removeProduct(nextProps.productToRemove);
//     }
//   }

  const openFloatCart = () => {
    setisOpen(true)
  };

 const closeFloatCart = () => {
    setisOpen(false)
  };

  const addProduct = product => {
    const { cartProducts, updateCart } = props;
    let productAlreadyInCart = false;

    cartProducts.forEach(cp => {
      if (cp.id === product.id) {
        cp.quantity += product.quantity;
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      cartProducts.push(product);
    }

    updateCart(cartProducts);
    openFloatCart();
  };

  const removeProduct = product => {
    const { cartProducts, updateCart } = props;

    const index = cartProducts.findIndex(p => p.id === product.id);
    if (index >= 0) {
      cartProducts.splice(index, 1);
      updateCart(cartProducts);
    }
  };

const proceedToCheckout = () => {
    const {
      totalPrice,
      productQuantity,
      currencyFormat,
      currencyId
    } = props.cartTotal;

    if (!productQuantity) {
      alert('Add some product in the bag!');
    } else {
      alert(
        `Checkout - Subtotal: ${currencyFormat} ${util.formatPrice(
          totalPrice,
          currencyId
        )}`
      );
    }
  };

    // const { cartTotal, cartProducts, removeProduct } = props;
const cartTotal = 100
    const products =f=><div>fuck you, this is a product</div> 
    // cartProducts.map(p => {
    //   return (
    //     <CartProduct product={p} removeProduct={removeProduct} key={p.id} />
    //   );
    // });

    let classes = ['float-cart'];

    if (!!isOpen) {
      classes.push('float-cart--open');
    }

    return (
      <div className={classes.join(' ')}>
        {/* If cart open, show close (x) button */}
        {isOpen && (
          <div
            onClick={() => closeFloatCart()}
            className="float-cart__close-btn"
          >
            X
          </div>
        )}

        {/* If cart is closed, show bag with quantity of product and open cart action */}
        {!isOpen && (
          <span
            onClick={() => openFloatCart()}
            className="bag bag--float-cart-closed"
          >
            <span className="bag__quantity">{cartTotal.productQuantity}</span>
          </span>
        )}

        <div className="float-cart__content">
          <div className="float-cart__header">
            <span className="bag">
              <span className="bag__quantity">{cartTotal.productQuantity}</span>
            </span>
            <span className="header-title">Bag</span>
          </div>

          <div className="float-cart__shelf-container">
            {products}
            {!products.length && (
              <p className="shelf-empty">
                Add some products in the bag <br />
                :)
              </p>
            )}
          </div>

          <div className="float-cart__footer">
            <div className="sub">SUBTOTAL</div>
            <div className="sub-price">
              <p className="sub-price__val">
                {`${cartTotal.currencyFormat} ${util.formatPrice(
                  cartTotal.totalPrice,
                  cartTotal.currencyId
                )}`}
              </p>
              <small className="sub-price__installment">
                {!!cartTotal.installments && (
                  <span>
                    {`OR UP TO ${cartTotal.installments} x ${
                      cartTotal.currencyFormat
                    } ${util.formatPrice(
                      cartTotal.totalPrice / cartTotal.installments,
                      cartTotal.currencyId
                    )}`}
                  </span>
                )}
              </small>
            </div>
            <div onClick={() => proceedToCheckout()} className="buy-btn">
              Checkout
            </div>
          </div>
        </div>
      </div>
    );
  
}

 