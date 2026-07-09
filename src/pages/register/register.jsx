import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "customer",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${API}/register`, form);

      if (data.success) {
        toast.success(data.message || "تم إنشاء الحساب بنجاح");
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "حدث خطأ ما");
    }
  };

  return (
    <div className="h-[90vh] flex items-center justify-center bg-[#f9f7f1]">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-red-600">
          إنشاء حساب
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="الاسم"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="البريد الإلكتروني"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="كلمة المرور"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="رقم الهاتف"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <option value="customer">Customer</option>
            <option value="supplier">admin</option>
          </select>

          <button
            type="submit"
            className="w-full bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition"
          >
            تسجيل
          </button>
        </form>

        <p className="text-center mt-6 text-gray-500">
          لديك حساب بالفعل؟{" "}
          <Link
            to="/login"
            className="text-red-600 font-semibold hover:underline"
          >
            تسجيل الدخول
          </Link>
        </p>
      </div>
    </div>
  );
}