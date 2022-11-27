const path = require("path");

<<<<<<< HEAD
module.export = {
	mode: "development",
	entry: "./src/main.js",
	output
=======
module.exports = {
	mode: "development",
	entry: "./src/main.ts",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				// compiles Less to CSS
				test: /\.less$/i,
				use: ["style-loader", "css-loader", "less-loader"],
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
};
>>>>>>> edd22031f0216969c52f132f9225072472eeaf04
