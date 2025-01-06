"use client";

import { useAuth } from "@/contexts/AuthContext";
import React, { useState } from "react";
import { Toast } from "../toast/Toast";
import { usePublic } from "@/hooks/usePublic";

export default function LoginForm() {
  usePublic();
  const {login}=useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Debe ser un correo electrónico válido.";
    }

    if (!formData.password) {
      newErrors.password = "La contraseña es obligatoria.";
    } else if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await login(formData);
        Toast.fire({
          icon: 'success',
          title: 'Sesión iniciada',
          text: '¡Bienvenido!',
        });
        
      } catch (error) {
        const errorMessage = error.response.data.message;
            const messageToShow = [
                "Invalid password",
                 "User does not exist"]
                 .includes(errorMessage) 
                 ? "Invalid credentials" 
                 : errorMessage;

                 Toast.fire({
                   icon: 'error',
                   title: 'Error al iniciar sesión',
                   text: messageToShow,
                 });
      }
      
    }
  };

  return (
  
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )}
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        login
      </button>
    </form>
  );
}
