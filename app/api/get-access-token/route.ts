const HEYGEN_API_KEY = "NTlmNmJiZDdiNDFlNGJiYTlkNzE5MjFmNWNkM2QwMWMtMTczMTMyOTg4OA";

export async function POST() {
  try {
    if (!HEYGEN_API_KEY) {
      throw new Error("API key is missing from .env");
    }

    const res = await fetch(
      "https://api.heygen.com/v1/streaming.create_token",
      {
        method: "POST",
        headers: {
          "x-api-key": "NTlmNmJiZDdiNDFlNGJiYTlkNzE5MjFmNWNkM2QwMWMtMTczNjc0NDE5MA==",
        },
      },
    );
    const data = await res.json();

    return new Response(data.data.token, {
      status: 200,
    });
  } catch (error) {
    console.error("Error retrieving access token:", error);

    return new Response("Failed to retrieve access token", {
      status: 500,
    });
  }
}
