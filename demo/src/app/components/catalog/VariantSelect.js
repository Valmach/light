/**
 * Created by steve on 12/04/15.
 */
var React = require('react');
var ProductActionCreator = require('../../actions/ProductActionCreators');
var ReactPropTypes = React.PropTypes;

import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

var VariantSelect = React.createClass({

    propTypes: {
        variants: React.PropTypes.array.isRequired,
        index: React.PropTypes.number.isRequired
    },

    getInitialState: function() {
        return {
            value: 0
        };
    },

    render: function() {
        var menuItems = this.props.variants.map(function(variant, index) {
            return <MenuItem key={index} value={index} primaryText={variant.type + ' $' + variant.price.toFixed(2)}/>;
        });
        return (
            <DropDownMenu value={this.state.value} onChange={this._setProductVariant}>
                {menuItems}
            </DropDownMenu>
        );
    },

    _setProductVariant: function(e, variantIndex, value) {
        this.setState({
            value: variantIndex
        });
        var index = this.props.index;
        ProductActionCreator.setProductVariant({index, variantIndex});
    }

});

module.exports = VariantSelect;
