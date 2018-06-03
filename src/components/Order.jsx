import React from 'react';
import { connect } from 'react-redux';
import {
    Panel,
    Button
} from 'react-bootstrap';
import '../css/Products.css';
import { Link } from 'react-router';
import Header from './Header';

const orderItem = items => {
    return (
        <ul>
            {
                items.cart.map((item, i) => {
                    return (<li>{item.name}</li>);
                })
            }
        </ul>
    )
}

const Order = props => {
    return (
        <div>
            <Header />

            <div className="main-container">
                <Panel className="order-panel">
                    <Panel.Heading>Orders</Panel.Heading>
                    <Panel.Body>
                        {
                            props.order.order.map((item, i) => {
                                return (
                                    <div className="order-box" key={i}>
                                        <p>Order id {item.id}</p>
                                        <p>Items {orderItem(item.orderItems)}</p>
                                        <p>Total {item.total}</p>
                                        <hr />
                                    </div>
                                )
                            })
                        }
                        <Button>
                            <Link to={'/app'}>Back to products</Link>
                        </Button>
                    </Panel.Body>
                </Panel>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        order: state.order
    }
}

export default connect(mapStateToProps, null)(Order);


