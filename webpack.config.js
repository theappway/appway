const path = require("path");

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
