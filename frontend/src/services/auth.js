const BASE_URL = `http://127.0.1:8000`;

export const signup = async function (formData) {
  const res = await fetch(`${BASE_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...formData,
    }),
  });

  const data = await res.json();
  return data;
};

export const login = async function (formData) {
  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...formData }),
  });

  const data = await res.json();
  return data;
};
