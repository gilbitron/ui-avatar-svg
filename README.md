<p align="center"><img src="https://user-images.githubusercontent.com/203882/104310672-fc204680-54cb-11eb-80f7-44ea848422de.png" width="400" style="max-width:100%;"></p>

# UI Avatar SVG

Generate SVG avatars with user initials in pure JS.

## Usage

Generate avatars using a flexible API:

```js
const UIAvatarSvg = require('ui-avatar-svg');

const svg = (new UIAvatarSvg())
    .text('AB')
    .size(64)
    .bgColor('#ff0000')
    .textColor('#ffffff')
    .generate();
```

The `generate()` function returns a string `<svg...>` that can be embedded in your app.

## API

* `text(string)` - User initials (default `AB`)
* `round(boolean)` - Is the avatar round instead of square (default `true`)
* `size(integer)` - Avatar size in px (default `64`)
* `bgColor(string)` - Background color (default `#ff0000`)
* `textColor(string)` - Text color (default `#ffffff`)
* `fontSize(float)` - Font size on a scale from `0.1` - `1.0` (default `0.4`)
* `fontWeight(string|integer)` - Font weight (default `normal`)
* `fontFamily(string)` - Font family (default `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`)

## Credits

UI Avatar SVG was created by [Gilbert Pellegrom](https://gilbitron.me) from [Dev7studios](https://dev7studios.co). Released under the MIT license.
