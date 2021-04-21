import React, { useState } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    return (
        <div className="payment">
            <div className="payment__container">

                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>
                {/* Delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Todor Alexandrov #2</p>
                        <p>Plovdiv, Bulgaria</p>
                    </div>
                </div>
                {/* Review items section */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* Payment method section */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment method</h3>
                    </div>
                    <div className="payment__details">
                        { /* Stripe */}
                        <div className="payment__priceContainer">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>Order Total : {value}</h3>
                                )}
                                decimalState={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
