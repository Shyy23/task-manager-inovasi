"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// Menggunakan Font Awesome 6 dari react-icons
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaRightToBracket,
} from "react-icons/fa6";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Header: Logo & Title (Responsive Spacing) */}
      <div className="flex flex-col items-center mb-8 md:mb-10 text-center">
        <div className="relative w-20 h-20 md:w-16 md:h-16 rounded-2xl overflow-hidden mb-5 shadow-lg">
          <Image
            src="/images/Logo.png"
            alt="Task Manager Logo"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 80px, 64px"
            priority
          />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
          Selamat Datang
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Masuk untuk mengakses akun Task Manager kamu
        </p>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-md bg-transparent md:bg-white md:rounded-2xl md:shadow-sm md:border md:border-gray-100 p-0 md:p-8">
        <form
          className="flex flex-col gap-5 justify-between lg:justify-center md:gap-y-0"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-4 mt-8">
            {/* Input Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <FaEnvelope className="text-base" />
                </span>
                <input
                  type="email"
                  placeholder="nama@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl  bg-[#EFEFEF] border border-[#CBCBCB] md:border-gray-200 focus:outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition text-sm placeholder-gray-400 text-gray-400"
                  required
                />
              </div>
            </div>

            {/* Input Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <FaLock className="text-base" />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-12 py-3.5 rounded-xl bg-[#EFEFEF] border border-[#CBCBCB] md:border-gray-200 focus:outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition text-sm placeholder-gray-400 text-gray-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition p-1"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot (Hanya tampil di desktop atau disesuaikan) */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-indigo-500 focus:ring-indigo-400 cursor-pointer"
                />
                <span className="text-sm text-gray-600 group-hover:text-gray-900 transition">
                  Ingat saya
                </span>
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-indigo-500 hover:text-indigo-600 transition font-medium"
              >
                Lupa Password?
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col gap-4 mt-8">
            <button
              type="submit"
              className="w-full py-4 md:py-3.5 rounded-2xl md:rounded-xl bg-indigo-500 hover:bg-indigo-600 active:scale-[0.98] transition-all text-white font-bold md:font-semibold text-sm tracking-widest md:tracking-normal uppercase md:capitalize shadow-lg shadow-indigo-100 flex items-center justify-center gap-2"
            >
              <FaRightToBracket className="text-lg md:text-base" />
              Masuk
            </button>

            {/* Divider & Footer Link */}
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-gray-100" />
                <span className="text-xs text-gray-400 uppercase tracking-widest">
                  Atau
                </span>
                <div className="flex-1 h-px bg-gray-100" />
              </div>

              <p className="text-center text-sm text-gray-500">
                Belum punya akun?{" "}
                <Link
                  href="/auth/register"
                  className="text-indigo-500 font-semibold hover:text-indigo-600 transition"
                >
                  Daftar Sekarang
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
