export default {
  providers: [
    {
      domain: process.env.local.CLERK_JWT_ISSUER_DOMAIN,
      applicationID: "convex",
    },
  ],
};