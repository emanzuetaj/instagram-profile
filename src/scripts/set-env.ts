var fs = require('fs');
require('dotenv').config();

const targetPath = `./src/appSettings.ts`;
const envConfigFile = `
export const AppSettings = {
    clientId: '${process.env.CLIENT_ID}',
    clientSecret: '${process.env.CLIENT_SECRET}',
    url: '${process.env.API_URL}',
    authUrl: '${process.env.AUTH_URL}'
};
`

fs.writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPath}`);
  console.log(envConfigFile);
});