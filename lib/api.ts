
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error || "Request failed");
  }

  return res.json();
}

export async function registerFarmer(data: {
  name: string;
  email: string;
  phone: string;
  location: string;
  password: string;
}) {
  return apiRequest("/api/farmer/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function loginFarmer(data: {
  email: string;
  password: string;
}) {
  return apiRequest("/api/farmer/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
