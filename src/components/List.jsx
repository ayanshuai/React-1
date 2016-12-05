var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id":1,"text":"bhakta"},{"id":2,"text":"Abhijit"},{"id":3,"text":"Debasish"}];

var List = React.createClass({
	render: function() {
		var listItem = ingredients.map(function(item) {
			return <ListItem key={item.id} ingredients={item.text} />;
		});

		return(<ul>{listItem}</ul>);

	}
});

module.exports = List;

