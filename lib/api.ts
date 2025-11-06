
const API_URL ='/api';
  
const getToken = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("token");
};
export async function apiRequest<T>(
  url: string,
  options: RequestInit = {}
){
  const token = getToken();

  const headers = {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    };

    const response = await fetch(`${API_URL}${url}`, { ...options, headers });
  
    if (response.status === 204) {
      return null; 
    }
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || "Request failed");
    }
    
      return response.json();
  };


export async function registerFarmer(data: {
  name: string;
  email: string;
  phone: string;
  location: string;
  password: string;
}) {
  return apiRequest("/farmer/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function loginFarmer(data: {
  email: string;
  password: string;
}) {
  return apiRequest("/farmer/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
