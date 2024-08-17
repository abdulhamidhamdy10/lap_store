import React from 'react'
import { Col, Container, Row } from "reactstrap";
import { CartProvider, useCart } from "react-use-cart";
import ScrollToTop from 'react-scroll-to-top';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function Cart() {
    function Cart() {
        const {
            emptyCart,
            isEmpty,
            totalUniqueItems,
            items,
            updateItemQuantity,
            removeItem,
            cartTotal,
            totalItems,
        } = useCart();

        if (isEmpty) {
            return <h1 style={{ color: "red" }} className='mr-auto ml-auto text-center mt-5 mb-5'> Your cart is empty <i class="fa-solid fa-ban"></i></h1>;
        }

        return (
            <div className='cart'>
                <h1 className=' text-center mt-3'>Cart ({totalUniqueItems})</h1>
                <div className='text-center mb-5'><button className="delete-all " onClick={() => emptyCart()}>Delete All</button></div>
                <Container>
                    <Row>
                        <div className='table'>

                            <Col md='12'>
                                <table className="table table-dark">
                                    <thead className='text-center'>
                                        <th>| Name |</th>
                                        <th>| Image |</th>
                                        <th>| Quantity |</th>
                                        <th>| Price |</th>
                                        <th>| Total Cost |</th>
                                        <th className='operate'>| Operation |</th>
                                    </thead>
                                    <tbody className='text-center'>
                                        {items.map((item) => (
                                            <tr key={item.id}>

                                                <td>  {item.title}</td>
                                                <td> <img style={{ width: "150px", height: "100px" }} src={item.image_url}></img></td>
                                                <td> {item.quantity}</td>
                                                <td> {item.price} $</td>
                                                <td> {item.price * item.quantity} $</td>
                                                <td>
                                                    <button className="mt-2 operate-btn-mins"
                                                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                                    >
                                                        -
                                                    </button>
                                                    <button className="mt-2 operate-btn-plus mr-1 ml-1"
                                                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                                    >
                                                        +
                                                    </button>
                                                    <button className="mt-2 operate-btn-del" onClick={() => removeItem(item.id)}>x</button>
                                                </td>
                                            </tr>


                                        ))}
                                    </tbody>


                                </table>
                                <h4 className='ml-3'><i className="fa-solid fa-chevron-right mr-2" style={{ color: "#ff6a00" }} />
                                    Total Items : {totalItems} </h4>
                                <h4 className='ml-3'><i className="fa-solid fa-chevron-right mr-2" style={{ color: "#ff6a00" }} />
                                    Total Cost : {cartTotal}$ </h4>

                            </Col>
                        </div>

                    </Row>
                </Container>

            </div>
        );
    }

    return (
        <CartProvider>
            <Navbar />
            <Cart />
            <Footer className="mt-5" />

            <ScrollToTop className='scrolltotop' smooth
                style={{ backgroundColor: "rgb(255, 106, 0)" }}
            />
        </CartProvider>
    )
}
