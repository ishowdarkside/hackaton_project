const BASE_URL = `http://127.0.1:8000`;

export const prompt = async (input) => {
  const jwt = localStorage.getItem("jwt");
  const res = await fetch(`${BASE_URL}/api/ai/prompt-ai`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      input,
    }),
  });

  const data = await res.json();
  return data;
};
