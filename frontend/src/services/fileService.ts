const API = import.meta.env.VITE_API_URL;

export const uploadFileService = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API}/api/upload`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token") || ""}`
    },
    body: formData
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Upload failed");
  }

  return data;
};