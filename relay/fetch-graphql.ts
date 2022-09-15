import { Variables } from "relay-runtime";

async function fetchGraphQL(text: string, variables: Variables) {
  const response = await fetch("http://localhost:6789/v1beta1/relay", {
    method: "POST",
    headers: {
      "x-hasura-admin-secret": "crudio",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;
