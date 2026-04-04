
export interface RegisterPayload {
  username: string
  email: string
  password: string
}

const API = import.meta.env.VITE_API_URL;

export const registerUser = async (payload: RegisterPayload) => {
  const response = await fetch(`${API}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || "Registration failed")
  }

  return data
}

export interface LoginPayload {
  email: string
  password: string
}

export const loginUser = async (payload: LoginPayload) => {
  const response = await fetch(`${API}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || "Login failed")
  }

  return data
}