# webconfig-parser

Simple library to parse Web.config file into Javascript object to retrieve some key/value parameters.

## Usage

```javascript
var WCParser = require('webconfig-parser');
var config = WCParser.parse();
```

The <code>parse</code> function return a Javascript with th following structure :
```javascript
{
param1Key: param1Value,
param2Key: param2Value,
...
}
```

## Options

The <code>parse</code> function accept the following options:
* <code>url</code>: The relative path to access the Web.config file. You need to include the filename (Default to *Web.config*)
* <code>tagName</code>: The name of the tag containing the parameters (Default to *add*)
* <code>keyAttrName</code>: The name of the attribute containing the parameter key (Default to *key*)
* <code>valueAttrName</code>: The name of the attribute containing the parameter value (Default to *value*)

## License

View the [LICENSE](https://github.com/AAudusseau/webconfig-parser/blob/master/LICENSE) file