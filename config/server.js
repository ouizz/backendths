module.exports = ({ env }) => ({
  host: env('HOST', 'backendths.vercel.app'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
