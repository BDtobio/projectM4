
"use client";

import RegisterUser from "@/helpers/register";
import React, { useState } from "react";
import { Toast } from "../toast/Toast";
import { usePublic } from "@/hooks/usePublic";

interface FormData {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
  address: string;
  phone: string;
}

export default function RegisterForm() {
  usePublic();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    address: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
    newErrors.name = "Name is required.";
    }
    
    if (!formData.email.trim()) {
    newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Must be a valid email.";
    }
    
    if (!formData.password.trim()) {
    newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters.";
    }
    
    if (formData.password !== formData.repeatPassword) {
    newErrors.repeatPassword = "Passwords do not match.";
    }
    
    if (!formData.address.trim()) {
    newErrors.address = "Address is required.";
    }
    
    if (!formData.phone.trim()) {
    newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
    newErrors.phone = "Phone number must be 10 digits.";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        await RegisterUser(formData);
        Toast.fire({
          icon: "success",
          title: "Registration successful",
          text: "Welcome!",
        });
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        Toast.fire({
          icon: "error",
          title: "Error al registrar",
          text: error.response.data.message,
        });
      }

      console.log("Submit exitoso");
      setSuccessMessage("Registration successful. Welcome!");
      setFormData({
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
        address: "",
        phone: "",
      });
      setErrors({});
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
    <div>
    <label htmlFor="name" className="block text-sm font-medium">
    Name
    </label>
    <input
    type="text"
    id="name"
    name="name"
    value={formData.name}
    onChange={handleChange}
    className="border p-2 w-full"
    />
    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
    </div>
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
    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
    <div>
    <label htmlFor="repeatPassword" className="block text-sm font-medium">
    Repeat Password
    </label>
    <input
    type="password"
    id="repeatPassword"
    name="repeatPassword"
    value={formData.repeatPassword}
    onChange={handleChange}
    className="border p-2 w-full"
    />
    {errors.repeatPassword && (
    <p className="text-red-500 text-sm">{errors.repeatPassword}</p>
    )}
    </div>
    <div>
    <label htmlFor="address" className="block text-sm font-medium">
    Address
    </label>
    <input
    type="text"
    id="address"
    name="address"
    value={formData.address}
    onChange={handleChange}
    className="border p-2 w-full"
    />
    {errors.address && (
    <p className="text-red-500 text-sm">{errors.address}</p>
    )}
    </div>
    <div>
    <label htmlFor="phone" className="block text-sm font-medium">
    Phone
    </label>
    <input
    type="text"
    id="phone"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    className="border p-2 w-full"
    />
    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
    </div>
    <button
    type="submit"
    className="bg-green-500 text-white px-4 py-2 rounded w-full"
    >
    Register
    </button>
    {successMessage && (
    <p className="text-green-500 text-center mt-4">{successMessage}</p>
    )}
   
    </form>
    );
   }