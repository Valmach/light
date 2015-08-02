/**
 * Created by steve on 09/07/15.
 */
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('./components/App.js');
var LogIn = require('./components/auth/Login.js');
var LogOut = require('./components/auth/Logout.js');
//var Stories = require('./components/stories/StoriesPage.react.jsx');
//var Story = require('./components/stories/StoryPage.react.jsx');
//var StoryNew = require('./components/stories/StoryNew.react.jsx');
var SignUp = require('./components/auth/Signup.js');
var About = require('./components/common/About.js');
var Contact = require('./components/common/Contact.js');
var Blogs = require('./components/common/Blogs.js');
var Blog = require('./components/common/Blog.js');
var News = require('./components/common/News.js');
var Forum = require('./components/common/Forum.js');

var Admin = React.createClass({
    render: function() {
        return <div>Admin</div>;
    }
});

var RoleAdmin = React.createClass({
    render: function() {
        return <div>RoleAdmin</div>;
    }
});
var UserAdmin = React.createClass({
    render: function() {
        return <div>UserAdmin</div>;
    }
});
var BlogAdmin = React.createClass({
    render: function() {
        return <div>BlogAdmin</div>;
    }
});
var AccessAdmin = React.createClass({
    render: function() {
        return <div>AccessAdmin</div>;
    }
});

module.exports = (
    <Route name="app" path="/" handler={App}>
        <Route name="about" path="/about" handler={About} />
        <Route name="contact" path="/contact" handler={Contact} />
        <Route name="blogs" path="/blogs" handler={Blogs} />
        <Route name="blog" path="/blog" handler={Blog} />
        <Route name="news" path="/news" handler={News} />
        <Route name="forum" path="/forum" handler={Forum} />
        <Route name="admin" path="/admin" handler={Admin} />
        <Route name="roleAdmin" path="/admin/roleAdmin" handler={RoleAdmin} />
        <Route name="userAdmin" path="/admin/userAdmin" handler={UserAdmin} />
        <Route name="blogAdmin" path="/admin/blogAdmin" handler={BlogAdmin} />
        <Route name="accessAdmin" path="/admin/accessAdmin" handler={AccessAdmin} />
        <Route name="logIn" path="/logIn" handler={LogIn}/>
        <Route name="logOut" path="/logOut" handler={LogOut}/>
        <Route name="signUp" path="/signUp" handler={SignUp}/>
    </Route>
);
