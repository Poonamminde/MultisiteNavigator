// src/services/websiteService.ts
export interface Website {
  _id: string;
  url: string;
}

export interface PaginatedResponse {
  websites: Website[];
  page: number;
  totalPages: number;
}

const API = import.meta.env.VITE_API_URL;

export const fetchWebsiteByPage = async (
  pageNumber: number,
  limit: number = 1
): Promise<PaginatedResponse> => {
  const token = localStorage.getItem("token") || "";

  const res = await fetch(`${API}/api/websites?page=${pageNumber}&limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Failed to fetch website");
  }

  const data: PaginatedResponse = await res.json();
  return data;
};