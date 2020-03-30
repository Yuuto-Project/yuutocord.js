'use strict';

const { writeFileSync } = require('fs');
const Discord = require('./src/index.js');
const discordExports = Object.keys(Discord);

const template = `import Discord from "../src/index.js";

export default Discord;

export const {
  ${discordExports.join(',\n  ')}
} = Discord;
`;

writeFileSync('./esm/discord.mjs', template);
