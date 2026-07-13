// src/pages/Auth/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function Login() {
  const [form, setform] = useState({email: "", password: ""});
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;

  console.log("api",API)
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post(`${API}/login`, form);
  if(data?.success){

localStorage.setItem(
"token",
data.token
);


localStorage.setItem(
"userId",
data.user.id
);
localStorage.setItem(
"username",
data.user.name
);


window.dispatchEvent(
new Event("login")
);



navigate("/");


}
    } catch (error) {
      toast.error(error.response?.data?.message || "حدث خطأ ما");
    }
  };


return (
  <div className="h-[90vh] flex items-center justify-center bg-[#f9f7f1]">
    <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-red-600">
        تسجيل الدخول
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
     
        <input
          name="email"
          type="email"
          placeholder="البريد الإلكتروني"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="كلمة المرور"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          required
        />
       
        

        <button
          type="submit"
          className="w-full bg-red-600 text-white font-semibold p-3 rounded-lg hover:bg-red-700 transition-colors"
        >
          تسجيل
        </button>
      </form>

      <p className="text-center mt-6 text-gray-500">
        لديك حساب بالفعل؟{" "}
        <Link to="/register" className="text-red-600 font-semibold hover:underline">
          تسجيل الدخول
        </Link>
      </p>
    </div>
  </div>
);

}
