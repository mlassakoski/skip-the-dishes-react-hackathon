




import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Panel,
    Button
} from 'react-bootstrap';
import '../css/Products.css';
import { addcart } from '../actions';
import { Link } from 'react-router';
import Header from './Header';

class Order extends Component {

    constructor(props) {
        super(props);
    }

    orderItem(orderItems) {
        return (
            <ul>
                {
                    orderItems.map((item, i) => {
                        return (<li>{item.name}</li>);
                    })
                }
            </ul>
        );
    }
    render() {
        return (
            <div>
                <Header />

                <div className="main-container">
                    <Panel className="order-panel">
                        <Panel.Heading>Orders</Panel.Heading>
                        <Panel.Body>
                            {
                                this.props.order.map((item, i) => {
                                    return (
                                        <div className="order-box" key={i}>
                                            <p>Order id {item.id}</p>
                                            <p>Items {this.orderItem(item.orderItems)}</p>
                                            <p>Total {item.total}</p>
                                            <hr/>
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
}

function mapStateToProps(state) {
    return {
        order: state.orderReducer
    }
}

export default connect(mapStateToProps, null)(Order);


