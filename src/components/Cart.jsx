




import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Panel,
    Button,
    Modal
} from 'react-bootstrap';
import '../css/Cart.css';
import { removecart, addOrder, clearCart } from '../actions';
import { Link } from 'react-router';

class Car extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    getTotal() {
        let total = 0;
        this.props.cart.map(i => total += i.price);
        return total;
    }

    render() {
        return (
            <div className="cart">
                <Panel>
                    <Panel.Heading><i className="fa fa-2x fa-cart-plus"></i></Panel.Heading>
                    <Panel.Body>
                        {
                            this.props.cart.map((item, i) => {
                                return (
                                    <div className="cart-box" key={i}>
                                        <span>{item.name}</span>
                                        <span>{item.price}</span>
                                        <span><i className="fa fa-trash" onClick={() => this.props.dispatch(removecart(item))}></i></span>
                                    </div>
                                )
                            })
                        }
                        <Button
                            block
                            bsSize="large"
                            disabled={this.props.cart.length == 0}
                            onClick={() => this.setState({ show: true })}
                        >Finish</Button>
                    </Panel.Body>
                </Panel>

                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            Checkout
              </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            this.props.cart.map((item, i) => {
                                return (
                                    <div className="cart-box" key={i}>
                                        <span>{item.name}</span>
                                        <span>{item.price}</span>
                                    </div>
                                )
                            })
                        }
                        <br /><br />
                        <p>Total: {this.getTotal()} </p>
                        <Panel>
                            <Panel.Body>Click on finish to conclude your purchase.</Panel.Body>
                        </Panel>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.setState({ show: false })}>Close</Button>
                        <Button onClick={() => {
                            this.props.dispatch(addOrder(this.props.cart))
                            this.props.dispatch(clearCart())
                        }}>
                            <Link to={'/orders'}>Finish</Link>
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer,
        order: state.orderReducer
    }
}

export default connect(mapStateToProps, null)(Car);

