const DOMAIN = 'domain'; //process.env.NEXT_PUBLIC_API

export const URI = {
  DOMAIN,
  LOGIN: '/v2/auth/login',
  REFRESH: 'refresh',
  URI_WITH_HASH_KEY: '/v2/abc/:hash_key/xyz',
  URI_WITH_ID: '/v2/abc/:id/xyz',
};
