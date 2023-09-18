/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/invite",
        destination:
          "https://discord.com/api/oauth2/authorize?client_id=1126157327746211840&permissions=1392106794198&scope=bot%20applications.commands&redirect_uri=https%3A%2F%2Freindeer.bsr.gg%2Fthanks&response_type=code",
        permanent: false,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/R2FDvcPXTK",
        permanent: false,
      },
      {
        source: "/vote",
        destination: "https://top.gg/bot/1126157327746211840/vote",
        permanent: false,
      },
      {
        source: "/review",
        destination: "https://top.gg/bot/1126157327746211840#reviews",
        permanent: false,
      },
      {
        source: "/github",
        destination: "https://github.com/GodderE2D/Reindeer",
        permanent: false,
      },
      {
        source: "/metrics",
        destination: "https://metrics.bsr.gg/public-dashboards/4effb089fbba4b7488cc5465069fc877?orgId=1",
        permanent: false,
      },
      {
        source: "/docs",
        destination: "/docs/introduction/getting-started",
        permanent: false,
      },
      {
        source: "/terms",
        destination: "/docs/legal/terms",
        permanent: false,
      },
      {
        source: "/privacy",
        destination: "/docs/legal/privacy",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
