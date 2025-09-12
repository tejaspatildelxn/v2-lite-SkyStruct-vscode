'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, Phone, Globe, Key, ShieldCheck } from 'lucide-react';

export default function RegisterPagePreview() {
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(''));

  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return; // only single digit
    const next = [...otp];
    next[index] = value;
    setOtp(next);
    if (value && index < 5) {
      const nextEl = document.getElementById(`otp-${index + 1}`);
      if (nextEl) nextEl.focus();
    }
  };

  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-gray-50">
      {/* ===== LEFT: FORM ===== */}
      <div className="flex items-center justify-center px-8 py-6 relative overflow-hidden">
        {/* subtle left abstract */}
        <div className="absolute -top-20 -left-10 w-56 h-56 bg-blue-50 rounded-full opacity-60 rotate-12 blur-xl" />
        <div className="absolute bottom-4 left-8 w-40 h-40 bg-gradient-to-br from-blue-50 to-white rounded-full opacity-40 blur-lg" />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full max-w-md"
        >
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Create your account</h1>
          <p className="text-sm text-gray-500 mb-8">
            Secure your projects and collaborate with your team — quick signup with phone OTP.
          </p>

          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
              <div className="flex items-center gap-3 px-4 py-3 border rounded-xl bg-white focus-within:ring-2 focus-within:ring-blue-500 shadow-sm">
                <User className="w-5 h-5 text-gray-400" />
                <input
                  className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400"
                  placeholder="Jane Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <div className="flex items-center gap-3 px-4 py-3 border rounded-xl bg-white focus-within:ring-2 focus-within:ring-blue-500 shadow-sm">
                <Mail className="w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
              <div className="flex gap-3">
                <div className="flex items-center gap-2 px-3 py-3 border rounded-xl bg-white shadow-sm">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <select className="bg-transparent outline-none text-gray-800">
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+971">🇦🇪 +971</option>
                  </select>
                </div>
                <div className="flex-1 flex items-center gap-3 px-4 py-3 border rounded-xl bg-white focus-within:ring-2 focus-within:ring-blue-500 shadow-sm">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400"
                    placeholder="98765 43210"
                  />
                </div>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="flex items-center gap-3 px-4 py-3 border rounded-xl bg-white focus-within:ring-2 focus-within:ring-blue-500 shadow-sm">
                <Lock className="w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400"
                  placeholder="Create a strong password"
                />
              </div>
            </div>

            {/* Generate OTP */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowOTP(true)}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition-all"
            >
              Generate OTP
            </motion.button>
          </form>

          <div className="mt-6 text-sm text-gray-600 text-center">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 font-semibold hover:underline">
              Sign in
            </a>
          </div>

          <div className="mt-4 text-xs text-gray-400 text-center">
            By signing up you agree to our{' '}
            <a href="/terms" className="underline text-gray-600">
              Terms
            </a>{' '}
            &{' '}
            <a href="/privacy" className="underline text-gray-600">
              Privacy
            </a>
          </div>
        </motion.div>
      </div>

      {/* ===== RIGHT: DECORATIVE BLUE AREA ===== */}
      <div className="relative flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-500 overflow-hidden px-6 py-8">
        {/* abstract background shapes */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/6 rounded-full blur-2xl rotate-12" />
        <div className="absolute -bottom-32 -left-32 w-[520px] h-[520px] bg-white/4 rounded-full blur-3xl" />
        <div className="absolute right-8 top-8 w-56 h-56 bg-white/8 rounded-tl-[90px] rounded-br-[40px] rotate-12" />
        <div className="absolute left-10 bottom-6 w-40 h-40 bg-white/6 rounded-full rotate-6" />

        {/* Big platform logo & name */}
        <motion.div
          initial={{ opacity: 0, x: 24, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex items-center gap-6 pr-16"
        >
          <div className="w-40 h-40 rounded-2xl bg-white flex items-center justify-center shadow-2xl">
            <div className="w-28 h-28 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white text-4xl font-extrabold shadow-inner">
              S
            </div>
          </div>

          <div className="text-white">
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight">SkyStruct</h2>
            <p className="mt-2 text-blue-100 max-w-xs">
              Build. Track. Deliver. A modern platform to manage construction projects & teams.
            </p>

            <div className="mt-6 flex gap-3">
              <div className="bg-white/10 px-3 py-2 rounded-lg text-white text-sm font-semibold shadow-sm flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" /> Secure by design
              </div>
              <div className="bg-white/10 px-3 py-2 rounded-lg text-white text-sm font-semibold shadow-sm">
                Enterprise ready
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ===== OTP Modal ===== */}
      <AnimatePresence>
        {showOTP && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 12, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 12, scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Verify your phone</h3>
                <button
                  onClick={() => setShowOTP(false)}
                  className="text-sm text-gray-500 hover:underline"
                >
                  Cancel
                </button>
              </div>

              <div className="grid grid-cols-6 gap-2 mb-6">
                {otp.map((v, i) => (
                  <input
                    key={i}
                    id={`otp-${i}`}
                    value={v}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    className="w-12 h-12 text-center border rounded-lg shadow-sm text-lg font-semibold text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
                    inputMode="numeric"
                    maxLength={1}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition-all"
              >
                Verify OTP
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
