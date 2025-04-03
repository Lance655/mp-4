"use server";

import { IGDBGame } from "@/types";

export default async function getGameInfo(gameName: string): Promise<IGDBGame[]> {
    // Read secrets from environment variables
    const clientId = process.env.IGDB_CLIENT_ID;
    const accessToken = process.env.IGDB_ACCESS_TOKEN;

    if (!clientId || !accessToken) {
        throw new Error("Missing IGDB credentials in .env.local");
    }

    // Prepare the body
    const body = `
    search "${gameName}";
    fields name, summary, platforms.name, cover.url; 
    limit 5;
  `;

    // Fetch the API
    const response = await fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
            "Client-ID": clientId,
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "text/plain",
            Accept: "application/json",
        },
        body,
    });

    if (!response.ok) {
        throw new Error(`IGDB request failed: ${response.status} ${response.statusText}`);
    }

    // 4. Parse the JSON response
    const data = (await response.json()) as IGDBGame[];
    return data;
}
