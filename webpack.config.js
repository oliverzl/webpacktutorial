const path = require("path");

module.exports = {
    mode:"development",
    devtool: "none",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }, 

    module: {
        rules: [
            {
                test: /\.scss$/,
                use:[
                    "style-loader", //3. inject styles into DOM.
                    "css-loader", // 2. turns css into common JS
                    "sass-loader" // 1. turns scss into css 
                ]
                
            }
        ]
    }
};