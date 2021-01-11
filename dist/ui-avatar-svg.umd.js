(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.UIAvatarSvg = factory());
}(this, (function () { 'use strict';

    class UIAvatarSvg {
        constructor() {
            this._text = 'AB';
            this._round = true;
            this._size = 64;
            this._bgColor = '#ff0000';
            this._textColor = '#ffffff';
            this._fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";
            this._fontSize = 0.4;
            this._fontWeight = 'normal';
        }

        text(text) {
            this._text = text;
            return this;
        }

        round(round) {
            this._round = round;
            return this;
        }

        size(size) {
            this._size = size;
            return this;
        }

        bgColor(bgColor) {
            this._bgColor = bgColor;
            return this;
        }

        textColor(textColor) {
            this._textColor = textColor;
            return this;
        }

        fontFamily(fontFamily) {
            this._fontFamily = fontFamily;
            return this;
        }

        fontSize(fontSize) {
            this._fontSize = fontSize;
            return this;
        }

        fontWeight(fontWeight) {
            this._fontWeight = fontWeight;
            return this;
        }

        generate() {
            return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this._size}px" height="${this._size}px" viewBox="0 0 ${this._size} ${this._size}" version="1.1"><${this._round ? 'circle' : 'rect'} fill="${this._bgColor}" width="${this._size}" height="${this._size}" cx="${this._size/2}" cy="${this._size/2}" r="${this._size/2}"/><text x="50%" y="50%" style="color: ${this._textColor};line-height: 1;font-family: ${this._fontFamily};" alignment-baseline="middle" text-anchor="middle" font-size="${Math.round(this._size*this._fontSize)}" font-weight="${this._fontWeight}" dy=".1em" dominant-baseline="middle" fill="${this._textColor}">${this._text}</text></svg>`
        }
    }

    return UIAvatarSvg;

})));
