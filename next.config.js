/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if(phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      swcMinify: true,
      env: {
        mongodb_username: 'aditi',
        mongodb_password: 'NruNqUTV1OPMxTvN',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'blogApp-dev'
      },
    } 
  }
  return {
    reactStrictMode: true,
    swcMinify: true,
    env: {
      mongodb_username: 'aditi',
      mongodb_password: 'NruNqUTV1OPMxTvN',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'blogApp'
    },
} 
};

