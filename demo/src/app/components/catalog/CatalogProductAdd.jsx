import React from 'react';
import CircularProgress from 'material-ui/lib/circular-progress';
import RaisedButton from 'material-ui/lib/raised-button';
import FormStore from '../../stores/FormStore';
import ProductStore from '../../stores/ProductStore';
import FormActionCreators from '../../actions/FormActionCreators';
import CatalogActionCreators from '../../actions/CatalogActionCreators';
import SchemaForm from 'react-schema-form/lib/SchemaForm';
import utils from 'react-schema-form/lib/utils';

const id = 'com.networknt.light.catalog.product.add';

var CatalogProductAdd = React.createClass({

    getInitialState: function() {
        return {
            schema: null,
            form: null,
            model: null,
            action: null
        };
    },

    componentWillMount: function() {
        FormStore.addChangeListener(this._onFormChange);
        ProductStore.addChangeListener(this._onProductChange);
        FormActionCreators.getForm(id);
    },

    componentWillUnmount: function() {
        FormStore.removeChangeListener(this._onFormChange);
        ProductStore.removeChangeListener(this._onProductChange);
    },

    _onFormChange: function() {
        let schema = FormStore.getForm(id).schema;
        let form = FormStore.getForm(id).form;
        let action = FormStore.getForm(id).action;

        this.setState({
            schema: schema,
            form: form,
            action: action,
            model: {parentRid: '#' + this.props.params.categoryRid}
        });
    },

    _onProductChange: function() {
        console.log('CatalogProductAdd._onProductChange', ProductStore.getResult(), ProductStore.getErrors());
        // TODO display toaster

    },

    _onModelChange: function(key, val) {
        this.setState({model: utils.selectOrSet(key, this.state.model, val)});
    },

    _onTouchTap: function(action) {
        action.data = this.state.model;
        CatalogActionCreators.addProduct(action);
    },

    render: function() {
        if(this.state.schema) {
            var actions = [];
            {this.state.action.map((item, index) => {
                let boundTouchTap = this._onTouchTap.bind(this, item);
                actions.push(<RaisedButton key={index} label={item.title} primary={true} onTouchTap={boundTouchTap} />)
            })}
            return (
                <div>
                    <SchemaForm schema={this.state.schema} model={this.state.model} form={this.state.form} onModelChange={this._onModelChange} />
                    {actions}
                </div>
            )
        } else {
            return <CircularProgress mode="indeterminate"/>
        }
    }
});

module.exports = CatalogProductAdd;