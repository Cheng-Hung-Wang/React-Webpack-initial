#!/usr/bin/env bash

# initial project
npm init

# instal webpack 
npm install webpack --save-dev
npm install webpack-cli --save-dev
npm install webpack-dev-server --save-dev
npm install html-webpack-plugin html-loader --save-dev

# install react
npm install react --save-dev 
npm install react-dom --save-dev
npm install react-router --save-dev
npm install react-router-dom --save-dev
npm install prop-types --save-dev


# install bable
npm install babel-loader  --save-dev
npm install babel-core  --save-dev
npm install babel-preset-react --save-dev
npm install babel-preset-env --save-dev



# install css loader
npm install css-loader style-loader --save-dev

# install url loader
npm install url-loader --save-dev

# install clean webpack for production model
npm install clean-webpack-plugin --save-dev

# install js basic library
npm install axios bootstrap jquery moment  --save-dev

# change package.json script content
vim package.json
#  "scripts": { 
#    "test": "webpack-dev-server --config webpack.dev.config.js",
#    "build": "webpack-dev-server --config ./webpack.prod.config.js"
#  },

