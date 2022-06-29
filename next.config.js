module.exports = {

    basePath: process.env.RUN_ENV == "development" ? "" : "/blog",

    assetPrefix: process.env.RUN_ENV == "development" ? "" : "/blog",

    publicRuntimeConfig: {
        basePath: process.env.RUN_ENV == "development" ? "" : "/blog",
    },
};