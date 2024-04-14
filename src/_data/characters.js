const EleventyFetch = require("@11ty/eleventy-fetch");


async function getCharacters() {
  const url = "https://api.disneyapi.dev/character";
  const response = EleventyFetch(url, {
    duration: "1d",
    type: "json"
  });
  const characters = await response;
  return characters;
}

module.exports = getCharacters;