# webconfig-parser

Simple library to parse Web.config file into Javascript object to retrieve some key/value parameters.

## Usage

```javascript
var WCParser = require('webconfig-parser');
var config = WCParser.parse();
```

The <code>parse</code> function return a Javascript object with the following structure :
```javascript
{
param1Key: param1Value,
param2Key: param2Value,
...
}
```

If the <code>readConnectionStrings</code> option is set to _true_ the Javascript object returned contains a <code>connectionStrings</code> property which is an object.

## Options

The <code>parse</code> function accept the following options:
* <code>url</code>: The absolute path to access the Web.config file. You need to include the filename (Default to *./../../Web.config* relative from the module script)
* <code>tagName</code>: The name of the tag containing the parameters (Default to *add*)
* <code>keyAttrName</code>: The name of the attribute containing the parameter key (Default to *key*)
* <code>valueAttrName</code>: The name of the attribute containing the parameter value (Default to *value*)
* <code>readConnectionStrings</code>: A boolean indicate if you need to retrieve connectionStrings entries (Default to *false*)

## License

View the [LICENSE](https://github.com/AAudusseau/webconfig-parser/blob/master/LICENSE) file