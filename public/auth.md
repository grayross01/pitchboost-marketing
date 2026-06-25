# PitchBoost agent authentication

PitchBoost authenticates API and MCP requests with an **API key** (a Bearer token), not OAuth.

## Get a key

Create one in your account at https://app.pitchboost.ai/dashboard/settings/api-keys. Keys look like `pb_live_...` and are shown only once.

## Use it

Send the key as a Bearer token on every request:

    Authorization: Bearer pb_live_xxxxxxxx

- REST API: `POST https://app.pitchboost.ai/api/v1/decks`
- MCP server (Streamable HTTP): `https://app.pitchboost.ai/api/mcp`

Each key is scoped to one team, and every request acts only on that team's data.

## Discover

- OpenAPI: https://pitchboost.ai/openapi.json
- MCP server card: https://pitchboost.ai/.well-known/mcp/server-card.json
- API catalog: https://pitchboost.ai/.well-known/api-catalog
