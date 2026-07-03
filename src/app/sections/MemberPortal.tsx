"use client";

import { useState } from "react";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import { GlassCard } from "@/app/components/GlassCard";
import { Eye, EyeOff, Lock, Mail, ArrowRight, User, Shield } from "lucide-react";

export function MemberPortal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-20 bg-[#0A2540] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#FF9933] rounded-full blur-[128px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF9933]/20 text-[#FF9933] text-sm font-medium mb-4">
              Member Portal
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Association Member Portal
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Sign in to access exclusive resources, manage your membership, and connect with fellow associations
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Login Form */}
          <ScrollReveal>
            <GlassCard className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#FF9933]/20 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-[#FF9933]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {isLogin ? "Welcome Back" : "Create Account"}
                  </h3>
                  <p className="text-white/50 text-sm">
                    {isLogin
                      ? "Sign in to your member account"
                      : "Register your association"}
                  </p>
                </div>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">
                    {isLogin ? "Login Successful" : "Registration Submitted"}
                  </h4>
                  <p className="text-white/60 text-sm">
                    {isLogin
                      ? "Redirecting to your dashboard..."
                      : "Your application is being reviewed. You'll receive an email shortly."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-white/60 mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="association@example.com"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9933]/30 focus:border-[#FF9933]/50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-white/60 mb-1.5">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                        className="w-full pl-10 pr-12 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9933]/30 focus:border-[#FF9933]/50 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#FF9933] text-white rounded-xl font-semibold hover:bg-[#e68a2e] transition-all flex items-center justify-center gap-2"
                  >
                    {isLogin ? "Sign In" : "Create Account"}
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => setIsLogin(!isLogin)}
                      className="text-sm text-white/40 hover:text-[#FF9933] transition-colors"
                    >
                      {isLogin
                        ? "Don't have an account? Register"
                        : "Already have an account? Sign in"}
                    </button>
                  </div>
                </form>
              )}
            </GlassCard>
          </ScrollReveal>

          {/* Portal Features */}
          <ScrollReveal delay={150}>
            <div className="space-y-4">
              <GlassCard className="p-6 flex items-start gap-4" hover={true}>
                <div className="w-12 h-12 rounded-xl bg-[#FF9933]/20 flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-[#FF9933]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Member Directory
                  </h4>
                  <p className="text-white/50 text-sm">
                    Connect with 28 state associations and their leadership teams
                  </p>
                </div>
              </GlassCard>

              <GlassCard className="p-6 flex items-start gap-4" hover={true}>
                <div className="w-12 h-12 rounded-xl bg-[#FF9933]/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#FF9933]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Resource Library
                  </h4>
                  <p className="text-white/50 text-sm">
                    Access policy documents, compliance guides, and industry reports
                  </p>
                </div>
              </GlassCard>

              <GlassCard className="p-6 flex items-start gap-4" hover={true}>
                <div className="w-12 h-12 rounded-xl bg-[#FF9933]/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#FF9933]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Communication Hub
                  </h4>
                  <p className="text-white/50 text-sm">
                    Receive updates, circulars, and meeting invitations
                  </p>
                </div>
              </GlassCard>

              <GlassCard className="p-6 flex items-start gap-4" hover={true}>
                <div className="w-12 h-12 rounded-xl bg-[#FF9933]/20 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-[#FF9933]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Secure Dashboard
                  </h4>
                  <p className="text-white/50 text-sm">
                    Manage membership, view dues, and track engagement
                  </p>
                </div>
              </GlassCard>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}