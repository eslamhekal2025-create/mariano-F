import axios from "axios";

const API_BASE = "http://localhost:3000";

export const uploadProgram = async (formData) => { // ✅ FormData مباشرة
  try {
    const response = await axios.post(`${API_BASE}/CreateProgram`, formData, {
      headers: { 
        'Content-Type': 'multipart/form-data' 
      }
    });
    return response.data;
  } catch (error) {
    console.error('Upload error:', error.response?.data || error.message);
    throw error;
  }
};