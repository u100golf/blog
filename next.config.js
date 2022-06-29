module.exports = {
    assetPrefix: process.env.NODE_ENV === "production" ? "/blog" : "",

    publicRuntimeConfig: {
        basePath: process.env.NODE_ENV === "production" ? "/blog" : "",
    },
};