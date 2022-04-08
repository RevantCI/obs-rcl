const path = require("path");
const upperFirst = require("lodash/upperFirst");
const camelCase = require("lodash/camelCase");
const { name, version, repository } = require("./package.json");
const { styles, theme } = require("./styleguide.styles");

module.exports = {
  components: "src/components/**/[A-Z]*.js",
  defaultExample: true,
  moduleAliases: {
    "rsg-example": path.resolve(__dirname, "src"),
  },
  title: `${upperFirst(camelCase(name))} v${version}`,
  ribbon: {
    url: repository.url,
    text: "View on GitHub",
  },
  styles,
  theme,
  version,
  require: [path.join(__dirname, 'style/output.css')],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  },
};
