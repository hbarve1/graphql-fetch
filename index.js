const fetch = require("cross-fetch");

async function graphqlServer(URL, payload) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const json = await response.json();

  return json;
}

async function query(URL, { query }) {
  const result = await graphqlServer(URL, { query });

  return result;
}

async function mutation(URL, { mutation, variables }) {
  const result = await graphqlServer(URL, { mutation, variables });

  return result;
}
