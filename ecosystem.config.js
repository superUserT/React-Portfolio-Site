module.exports = {
    apps: [
        {
            name: "sample-node-js",
            script: "npm",
            args: "start",
            env:{
                NODE_ENV: "development",
                name: "node-js",
                APP_LOG_LEVEL: "true",
                APP_HOST: "http://localhost",
                APP_PORT: "3000"
            },
        },
    ],
};
