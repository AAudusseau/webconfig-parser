/**
*
* webconfig-parser
*
* License MIT
*
**/

/*====================================
=            Dependencies            =
====================================*/
var _         = require('lodash');
var DomParser = require('xmldom').DOMParser;
var fs        = require('fs');
var path      = require('path');

var parser    = {};

parser.parse = function (options) {

    if (!_.isObject(options)) return;

    options = _.defaults(options, {
        url: path.join(__dirname, './../../Web.config'),
        encoding: 'utf8',
        tagName: 'add',
        keyAttrName: 'key',
        valueAttrName: 'value'
    });

    var config = {};

    /* Read of the Web.config file */
    var webConfigXML = fs.readFileSync(options.url, {
        encoding: options.encoding
    });

    /* Parse the file */
    var doc = new DomParser().parseFromString(webConfigXML, 'text/xml');

    /* Retrieve all parameters entries */
    var paramsEntries = doc.getElementsByTagName(options.tagName);
    for (var i = paramsEntries.length - 1; i >= 0; i--) {
        var param = paramsEntries.item(i);
        if (param.hasAttribute(options.keyAttrName)) {
            config[param.getAttribute(options.keyAttrName)] = param.getAttribute(options.valueAttrName);
        }
    }

    return config;
};


module.exports = parser;
