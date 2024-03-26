const dependencies = require('../package.json').dependencies;
const federationConfig = ({ APP1 }) => {
  return {
  name: 'sharedComponent',
  filename: 'remoteEntry.js',
  exposes: {
    './Button': './src/components/Button/Button.tsx',
    './ButtonWrapper': './src/components/Button/ButtonWrapper.tsx'
  },
  remotes:{
    mainApp: `mainApp@${APP1}/mainEntry.js`
  },
  shared: {
    ...dependencies,
    react: {
      eager: true,
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      eager: true,
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
    'antd': {
      eager: true,
      singleton: true,
      requiredVersion: dependencies['antd'],
    },
  },
  }
};

module.exports = federationConfig;