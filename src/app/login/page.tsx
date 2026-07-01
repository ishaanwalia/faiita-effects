"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/scroll-animation";
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  Shield,
  AlertCircle,
  LogIn,
  Users,
} from "lucide-react";

// Hardcoded GB member credentials for static export
// In production with API routes, this would be replaced with real auth
const GB_MEMBERS = [
  { email: "president@faiita.co.in", password: "Faiita@2026", name: "Navin Gupta", role: "President" },
  { email: "sr.vp@faiita.co.in", password: "Faiita@2026", name: "Liju P. Raju", role: "Sr. Vice President" },
  { email: "vp@faiita.co.in", password: "Faiita@2026", name: "Rajeev Chitkara", role: "Vice President" },
  { email: "secretary@faiita.co.in", password: "Faiita@2026", name: "Amit Kumar", role: "Secretary" },
  { email: "admin@faiita.co.in", password: "Faiita@2026", name: "Admin", role: "ADMIN" },
];

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const member = GB_MEMBERS.find(
      (m) => m.email === formData.email && m.password === formData.password
    );

    if (member) {
      // Store in sessionStorage for static export (no cookies)
      sessionStorage.setItem("faiita_user", JSON.stringify({
        name: member.name,
        email: member.email,
        role: member.role,
        loggedInAt: new Date().toISOString(),
      }));
      router.push("/admin");
    } else {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <ScrollAnimation animation="slide-up">
          <Card className="border-0 shadow-xl overflow-hidden">
            {/* Header with gradient */}
            <div className="bg-[#0A2540] px-6 py-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9933] rounded-full blur-[64px]" />
              </div>
              <div className="relative">
                <div className="w-16 h-16 mx-auto bg-[#FF9933] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white mb-1">
                  GB Member Login
                </CardTitle>
                <CardDescription className="text-white/60">
                  Governing Body Members Only
                </CardDescription>
              </div>
            </div>

            <CardContent className="p-6 pt-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#0A2540] font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="pl-10 h-12 border-gray-200 focus:border-[#FF9933] focus:ring-[#FF9933]/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-[#0A2540] font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="pl-10 pr-10 h-12 border-gray-200 focus:border-[#FF9933] focus:ring-[#FF9933]/20"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {status === "error" && (
                  <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-red-800 font-medium text-sm">
                        Invalid credentials
                      </p>
                      <p className="text-red-600 text-xs">
                        Please check your email and password and try again.
                      </p>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full h-12 bg-[#FF9933] hover:bg-[#e68a2e] text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Authenticating...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <LogIn className="w-5 h-5" />
                      Sign In
                    </span>
                  )}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <Users className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-blue-800 font-medium text-sm">
                      Governing Body Access Only
                    </p>
                    <p className="text-blue-600 text-xs mt-0.5">
                      This portal is exclusively for FAIITA Governing Body members.
                      For general inquiries, please{" "}
                      <a href="/contact" className="underline hover:text-blue-800">
                        contact us
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </main>
  );
}
