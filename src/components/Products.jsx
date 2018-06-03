import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Table,
    FormGroup,
    InputGroup,
    FormControl,
    Glyphicon
} from 'react-bootstrap';
import '../css/Products.css';
import { loadProduct, addCart } from '../actions';

class Products extends Component {

    constructor(props) {
        super(props);

        this.state = {
            url: `http://api-vanhack-event-sp.azurewebsites.net/api/v1/Product`,
            query: ''
        };
    }

    componentDidMount() {
        this.search();
    }

    search() {
        const url = this.state.query === '' ? this.state.url : this.state.url + `/search/${this.state.query}`
        fetch(url)
            .then(json => json.json())
            .then(data => {
                this.props.onLoadProduct(data);
            });
    }

    tabRow() {
        if (this.props.product.product.length > 0) {
            return this.props.product.product.map((item, i) => {
                return (
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <td><i className="fa fa-plus-circle" onClick={() => this.props.onAddCart(item)}></i></td>
                    </tr>
                )
            })
        }
    }

    render() {
        return (
            <div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search for an food"
                            value={this.state.query}
                            onChange={event => { this.setState({ query: event.target.value }) }}
                            onKeyUp={event => { this.search() }}
                        />
                        <InputGroup.Addon onClick={() => this.search()}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>

                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Add to car</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        product: state.product
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddCart: (item) => dispatch(addCart(item)),
        onLoadProduct: (items) => dispatch(loadProduct(items))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);


