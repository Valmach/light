var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {

    getClientToken: function() {
        AppDispatcher.dispatch({
            type: ActionTypes.GET_CLIENT_TOKEN
        });
        WebAPIUtils.getClientToken();
    }

};
