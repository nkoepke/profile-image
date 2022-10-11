![profile-image](https://github.com/nkoepke/profile-image/blob/main/images/title_image_pi.png?raw=true)

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![Generic badge](https://img.shields.io/badge/Version-0.0.5-status.svg)](https://shields.io/)
[![GitHub latest commit](https://badgen.net/github/last-commit/nkoepke/profile-image/main)](https://GitHub.com/nkoepke/profile-image/commit/)
[![GitHub Pages](https://img.shields.io/badge/Github%20Pages--gray?logo=github&style=social)](https://nkoepke.github.io/profile-image/)

# Profile-Image
This JavaScript class generates a placeholder image or default profile image as SVG or PNG. You can use the following parameters in the constructor:

### ProfileImage class

class `ProfileImage` (name `string`, options [optional] `object`)

#### name `string`

* A string of characters. Any full name will be shortened to the first letter of the first two words.

#### options.textColor `string`

* Sets the text color. Any browser supported color value can be used. `default: "#ffffff"`

#### options.backgroundColor `string`

* Aets the background color. Any browser supported color value can be used. `default: "#1f6feb"`

#### options.fontFamily `string`

* Sets the font family. `default: "Arial"`

#### options.fontSize `number`

* Sets the font size of the text. `default: 40`

#### options.fontWeight `string`

* Sets the font weight of the text. `default: "normal"`

### Methods

#### svg()
![JavaScript](https://img.shields.io/badge/JavaScript-5c5c5c?logo=javascript) ![PHP](https://img.shields.io/badge/PHP-5c5c5c?logo=php) ![Ruby](https://img.shields.io/badge/Ruby-5c5c5c?logo=ruby) ![NodeJS](https://img.shields.io/badge/NodeJS-profile--image-5c5c5c?logo=node.js)
* Returns a String containing a SVG with the set parameters.

#### png()
![JavaScript](https://img.shields.io/badge/JavaScript-5c5c5c?logo=javascript) ![NodeJS](https://img.shields.io/badge/NodeJS-profile--image--png-5c5c5c?logo=node.js)

* Returns a String containing a base64 encoded PNG with the set parameters.

#### previewInConsole()
![JavaScript](https://img.shields.io/badge/JavaScript-5c5c5c?logo=javascript) ![NodeJS](https://img.shields.io/badge/NodeJS-5c5c5c?logo=node.js)

* Logs a color preview in the console.

# Usage

Include the script in your HTML.

```html
<script language="javascript" type="text/javascript" src="/path/to/file/src/profile-image.js"></script>
```

### SVG

```js
var image = new ProfileImage("Max Miller");
image.svg();
```

returns

```xml
<svg viewBox='0 0 100 100' width='100' height='100' style='background-color:#1f6feb'>
  <rect width='100' height='100' x='0' y='0' fill='#1f6feb'></rect>
  <text x='50%' y='50%' alignment-baseline='central' text-anchor='middle' font-weight='bold' font-family='Arial' font-size='40' fill='#ffffff' dominant-baseline='middle' text-anchor='middle'>MM</text>
</svg>
```

as a string.

### PNG

```js
var image = new ProfileImage("Max Miller", {backgroundColor: "#45c421", textColor: "black", fontWeight: "bold"});
image.png();
```

returns base64 encoded PNG as string.

```
data:image/png;base64,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
```

# Example

The result for

```javascript
var image = new ProfileImage("Nick Keaton", {fontWeight: "bold"});
var src = image.png();
```

would look like this when used as "src":

![image](https://github.com/nkoepke/profile-image/blob/main/images/example.png?raw=true)

# Alternatives

There is also a PHP and a Ruby class for SVGs as well as modules for NodeJS. The module "profile-image" is without the png method. "profile-image-png" contains the png method but requires [node-canvas](https://www.npmjs.com/package/canvas).

### API

You can also use the [API](https://api.nilskoepke.com) for Testing:

```
https://api.nilskoepke.com/profile-image?name=John+Doe&backgroundColor=rgb(33,194,87)
```

returns

![No image? Open an issue.](https://api.nilskoepke.com/profile-image?name=John+Doe&backgroundColor=rgb(33,194,87))

Set your custom options as individual URL parameters. For spaces use "+" &#8594; "John+Doe". For color parameters you can use color names like "green", rgb and rgba like "rgb(33,194,87)", hsl, hsla and hex values. Hex color values cannot start with "#". Use "$" instead: "#ffffff" &#8594; "$ffffff"
