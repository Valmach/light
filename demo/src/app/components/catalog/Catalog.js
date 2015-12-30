/**
 * Created by steve on 11/08/15.
 */
var React = require('react');
var ProductList = require('./ProductList');
//var TreePath = require('./TreePath');
//var SearchForm = require('./SearchForm');
var WebAPIUtils = require('../../utils/WebAPIUtils');
var ProductStore = require('../../stores/ProductStore');
var ProductActionCreators = require('../../actions/ProductActionCreators');
var classNames = require('classnames');

var Catalog = React.createClass({
    displayName: 'Catalog',

    getInitialState: function() {
        return {
            catalog: [],
            products: [],
            ancestors: [],
            allowUpdate: false,
            categoryTreeOpen: true
        };
    },

    componentWillMount: function() {
        ProductStore.addChangeListener(this._onChange);
        //ProductActionCreators.loadCatalog();
    },

    componentWillUnmount: function() {
        ProductStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        //console.log('_onChange is called');
        if(ProductStore.getSelected() && ProductStore.getSelected().isMounted()) {
            this.state.selected.setState({selected: false});
        }
        if (ProductStore.getOnCategorySelect()) {
            ProductStore.getOnCategorySelect()(node);
        }
        this.setState({
            catalog: ProductStore.getCatalog(),
            ancestors: ProductStore.getAncestors(),
            allowUpdate: ProductStore.getAllowUpdate(),
            products: ProductStore.getProducts(),
            selected: ProductStore.getNode()
        });
        if(ProductStore.getNode()) {
            ProductStore.getNode().setState({selected: true});
        }
    },

    _toggleCategories: function() {
        this.setState({
            categoryTreeOpen: !this.state.categoryTreeOpen
        });
    },

    onSelect: function (node) {
        ProductActionCreators.selectCatalog(node, this.state.selected, this.props.onCategorySelect);

        // move all the state change into the product store.
        /*
        if (this.state.selected && this.state.selected.isMounted()) {
            this.state.selected.setState({selected: false});
        }
        this.setState({selected: node});
        node.setState({selected: true});
        if (this.props.onCategorySelect) {
            this.props.onCategorySelect(node);
        }
        */
        
    },
    render: function() {
        return (
            <div className="catalogView container">
                <div className="row">
                    <div className={this.state.categoryTreeOpen ? "col-xs-9" : "col-xs-12"}>
                        <ProductList products={this.state.products} ancestors={this.state.ancestors} allowUpdate={this.state.allowUpdate}/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Catalog;