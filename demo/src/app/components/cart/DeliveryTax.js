/**
 * Created by steve on 04/09/15.
 */
var React = require('react');
var ReactPropTypes = React.PropTypes;
var CartStore = require('../../stores/CartStore');
var CartActionCreators = require('../../actions/CartActionCreators');
var Cart = require('./Cart');

var DeliveryTax = React.createClass({

    render: function() {
        return (
            <Cart cartItems={ this.props.cartItems } totalPrice={ this.props.totalPrice } shipping={CartStore.getShipping()} taxes={CartStore.getTaxes()}/>
        )
    }
});

module.exports = DeliveryTax;
