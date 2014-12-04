'use strict';
var React = require('react');

/**
 * PageHome
 *
 * @class PageHome
 * @constructor
 */
var PageHome = React.createClass({
    getInitialState: function() {
        return {};
    },
    /**
     * Refer to React documentation render
     *
     * @method render
     * @return {Object} HTML head section
     */
    render: function() {
        return (
            <h2>Page Home</h2>
        );
    }
});

module.exports = PageHome;