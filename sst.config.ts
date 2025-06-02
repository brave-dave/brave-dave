// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
    app(input) {
        return {
            name: "brave-dave",
            removal: input?.stage === "production" ? "retain" : "remove",
            home: "aws",
            providers: { aws: true },
        };
    },
    async run() {
        new sst.aws.Nextjs("brave-dave-website", {
            path: ".",
            openNextVersion: "3.3.1",
            domain: {
                name: "bravedave.com",
                aliases: ["www.bravedave.com"],
                dns: false,
                cert: process.env.CERTIFICATE_ARN,
            },
        });
    },
}); 