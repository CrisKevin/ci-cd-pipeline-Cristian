const ENV = process.env.NODE_ENV || 'development';

const config = {
  development: { db: 'dev-db', logLevel: 'debug' },
  test: { db: 'test-db', logLevel: 'warn' },
  production: { db: 'prod-db', logLevel: 'error' }
};

module.exports = config[ENV];
