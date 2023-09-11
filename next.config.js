/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  env: {
    HOST: 'people-discovery.cot7tchlsltq.eu-west-2.rds.amazonaws.com',
    PORT:5432,
    PASSWORD:'Greg4min',
    USERNAME:'username'
  },
};

module.exports = nextConfig;
