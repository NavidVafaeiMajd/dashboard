// LoginPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/Context/AuthContext";
import Swal from 'sweetalert2';
import { toast } from "react-toastify";

const LoginPage: React.FC = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      login({ id: "1", name: "Admin" });
      Swal.fire({
        title: "ورود موفقیت‌آمیز!",
        text: "در حال انتقال به داشبورد...",
        icon: "success",
        timer: 2500, // چند ثانیه نمایش بمونه
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        timerProgressBar: true,
      }
      )
      setTimeout(() => {
        Swal.close(); // پاپ‌آپ بسته بشه
        navigate("/"); // ریدایرکت
      }, 2500);

    } else {
      toast.error("نام کاربری یا رمز عبور اشتباه است.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
