"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaUser,
  FaEye,
  FaEyeSlash,
  FaListAlt,
  FaChartLine,
  FaUsers,
  FaUserPlus,
} from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

const features = [
  {
    icon: <FaListAlt className=" mt-0.5 shrink-0" />,
    text: "Buat dan atur task dengan cepat",
  },
  {
    icon: <FaChartLine className=" mt-0.5 shrink-0" />,
    text: "Pantau progres secara real-time",
  },
  {
    icon: <FaUsers className=" mt-0.5 shrink-0" />,
    text: "Kolaborasi dengan tim tanpa ribet",
  },
];

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

return (
    // Grid Utama: 1 kolom di mobile, 12 kolom di desktop (lg)
<div className="grid min-h-svh grid-cols-1 lg:grid-cols-12 bg-transparent lg:bg-white lg:bg-linear-to-br lg:from-teal-50 lg:via-white lg:to-indigo-50 lg:shadow-2xl lg:rounded-3xl overflow-hidden">      
      {/* ─────────────────────────────────────────
          LEFT PANEL (BRANDING) - Muncul hanya di LG
      ───────────────────────────────────────── */}
      <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 bg-indigo-600 flex-col items-center justify-center p-12 text-white relative overflow-hidden">
        <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-8">
          <div className="relative w-24 h-24 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20">
            <Image
              src="/images/Logo.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">HabitTracker</h2>
            <p className="mt-3 text-indigo-100 text-sm leading-relaxed">
              Satu platform untuk kelola semua kebiasaan & task kamu dengan disiplin tinggi.
            </p>
          </div>

          <ul className="flex flex-col gap-4 w-full">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-4 bg-white/10 rounded-2xl px-5 py-4 backdrop-blur-md border border-white/10">
                <span className="text-indigo-200 text-xl">{f.icon}</span>
                <span className="text-sm font-medium">{f.text}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Dekorasi Background */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-indigo-400/20 blur-3xl" />
      </div>

      {/* ─────────────────────────────────────────
          RIGHT PANEL (FORM) - Responsif
      ───────────────────────────────────────── */}
      <div className="lg:col-span-7 xl:col-span-8 flex flex-col p-6 md:p-12 lg:p-16 bg-transparent lg:bg-white">
        <form 
          className="flex flex-col flex-1 max-w-md mx-auto w-full justify-between lg:justify-center lg:gap-8"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Header & Input Group */}
          <div className="flex flex-col">
            <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
              {/* Logo (Hanya muncul di mobile/tablet) */}
              <div className="lg:hidden relative w-20 h-20 rounded-2xl overflow-hidden mb-6 shadow-lg">
                <Image
                  src="/images/Logo.png"
                  alt="Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                Daftar Akun
              </h1>
              <p className="text-sm text-gray-500 mt-2">
                Buat akun untuk mulai mengelola produktivitas kamu.
              </p>
            </div>

            {/* Input Fields */}
            <div className="flex flex-col gap-4 mt-8">
              {/* Nama */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700">Nama Lengkap</label>
                <div className="relative group">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Masukkan Nama Lengkap"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-gray-300 border border-gray-400 focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition outline-none text-sm placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <div className="relative group">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                  <input
                    type="email"
                    name="email"
                    placeholder="nama@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-gray-300 border border-gray-400 focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition outline-none text-sm placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Password Group */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-700">Password</label>
                  <div className="relative group">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="••••••••"
                      value={form.password}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-300 border border-gray-400 focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition outline-none text-sm placeholder-gray-400"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-700">Konfirmasi</label>
                  <div className="relative group">
                    <input
                      type={showConfirm ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="••••••••"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-300 border border-gray-400 focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition outline-none text-sm placeholder-gray-400"
                    />
                    <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                      {showConfirm ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer untuk Mobile - Mendorong footer ke bawah */}
          <div className="flex-1 min-h-35 lg:hidden" />

          {/* Footer & CTA */}
          <div className="flex flex-col gap-4 mt-8">
            <button className="w-full py-4 rounded-2xl bg-indigo-500 hover:bg-indigo-600 active:scale-[0.95] transition-all text-white font-bold text-sm tracking-widest uppercase shadow-xl shadow-indigo-100 flex items-center justify-center gap-2">
              <FaUserPlus className="text-lg" />
              Daftar Sekarang
            </button>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-xs text-gray-400 uppercase tracking-tighter">Atau</span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            <p className="text-center text-sm text-gray-500">
              Sudah punya akun?{" "}
              <Link href="/login" className="text-indigo-500 font-bold hover:underline underline-offset-4">
                Masuk disini
              </Link>
            </p>
          </div>
        </form>
      </div>

    </div>
  );
}