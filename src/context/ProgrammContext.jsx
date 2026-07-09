import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProgrammContext = createContext();  // ✅ Context object

export const ProgrammProvider = ({ children }) => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [countPrograms, setCountPrograms] = useState(0);

  async function getAllPrograms() {
    try {
      setLoading(true);
      console.log('Fetching from:', `${import.meta.env.VITE_API_URL}/getPrograms`);
      
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/getPrograms`);
      console.log('API Response:', data);
      
      if (data.success) {
        setPrograms(data.data || []);
        setCountPrograms(data.total || data.count || 0);
      }
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllPrograms();
  }, []);

  // ✅ Value object
  const value = {
    programs,
    loading,
    countPrograms,
    getAllPrograms
  };

  return (
    <ProgrammContext.Provider value={value}>
      {children}
    </ProgrammContext.Provider>
  );
};

export const usePrograms = () => {
  const context = useContext(ProgrammContext);
  if (!context) {
    throw new Error('usePrograms must be used within ProgrammProvider');
  }
  return context;
};