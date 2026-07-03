"use client";

import { useState } from "react";
import { mockLeadership } from "@/lib/mock-data";
import { X, MapPin } from "lucide-react";

// Simplified India states with coordinates for SVG rendering
const states = [
  { id: "AP", name: "Andhra Pradesh", code: "AP" },
  { id: "AR", name: "Arunachal Pradesh", code: "AR" },
  { id: "AS", name: "Assam", code: "AS" },
  { id: "BR", name: "Bihar", code: "BR" },
  { id: "CT", name: "Chhattisgarh", code: "CT" },
  { id: "GA", name: "Goa", code: "GA" },
  { id: "GJ", name: "Gujarat", code: "GJ" },
  { id: "HR", name: "Haryana", code: "HR" },
  { id: "HP", name: "Himachal Pradesh", code: "HP" },
  { id: "JK", name: "Jammu & Kashmir", code: "JK" },
  { id: "JH", name: "Jharkhand", code: "JH" },
  { id: "KA", name: "Karnataka", code: "KA" },
  { id: "KL", name: "Kerala", code: "KL" },
  { id: "MP", name: "Madhya Pradesh", code: "MP" },
  { id: "MH", name: "Maharashtra", code: "MH" },
  { id: "MN", name: "Manipur", code: "MN" },
  { id: "ML", name: "Meghalaya", code: "ML" },
  { id: "MZ", name: "Mizoram", code: "MZ" },
  { id: "NL", name: "Nagaland", code: "NL" },
  { id: "OR", name: "Odisha", code: "OR" },
  { id: "PB", name: "Punjab", code: "PB" },
  { id: "RJ", name: "Rajasthan", code: "RJ" },
  { id: "SK", name: "Sikkim", code: "SK" },
  { id: "TN", name: "Tamil Nadu", code: "TN" },
  { id: "TG", name: "Telangana", code: "TG" },
  { id: "TR", name: "Tripura", code: "TR" },
  { id: "UP", name: "Uttar Pradesh", code: "UP" },
  { id: "UK", name: "Uttarakhand", code: "UK" },
  { id: "WB", name: "West Bengal", code: "WB" },
];

// State association details (mock)
const stateDetails: Record<string, { association: string; members: number; president: string }> = {
  MH: { association: "Maharashtra IT Dealers Association", members: 8500, president: "Rajesh Sharma" },
  KA: { association: "Karnataka IT Traders Forum", members: 4200, president: "Priya Nair" },
  DL: { association: "Delhi IT Traders Association", members: 3800, president: "Amit Kumar" },
  TN: { association: "Tamil Nadu IT Distributors", members: 4600, president: "K. Rajan" },
  GJ: { association: "Gujarat IT Federation", members: 3500, president: "Mehul Patel" },
  UP: { association: "UP IT Association", members: 5100, president: "Vijay Singh" },
  WB: { association: "West Bengal IT Dealers", members: 2900, president: "S. Banerjee" },
  KL: { association: "Kerala IT Dealers Association", members: 3200, president: "Liju P. Raju" },
  PB: { association: "Punjab Computer Dealers", members: 1800, president: "Rajeev Chitkara" },
  BR: { association: "Bihar IT Association", members: 2100, president: "Navin Gupta" },
  RJ: { association: "Rajasthan IT Traders", members: 2600, president: "Sunil Sharma" },
  MP: { association: "MP IT Dealers Forum", members: 2300, president: "Ravi Joshi" },
  HR: { association: "Haryana IT Association", members: 1500, president: "Deepak Malik" },
  OR: { association: "Odisha IT Dealers", members: 1200, president: "P. Mohanty" },
  AP: { association: "Andhra IT Traders", members: 1800, president: "V. Prasad" },
  TG: { association: "Telangana IT Association", members: 3400, president: "K. Reddy" },
};

// SVG paths for major states (simplified)
const statePaths: Record<string, string> = {
  MH: "M 180,220 L 220,215 L 240,230 L 235,260 L 210,275 L 185,260 L 175,240 Z",
  KA: "M 175,275 L 210,275 L 220,300 L 210,320 L 185,330 L 165,310 L 160,290 Z",
  RJ: "M 130,140 L 170,135 L 180,165 L 175,195 L 155,200 L 130,185 L 120,160 Z",
  GJ: "M 120,160 L 155,200 L 150,220 L 130,225 L 110,210 L 100,180 Z",
  UP: "M 180,135 L 230,130 L 250,150 L 245,175 L 210,175 L 190,165 L 180,155 Z",
  PB: "M 150,110 L 175,105 L 180,125 L 160,130 L 145,120 Z",
  HR: "M 175,125 L 195,120 L 200,140 L 180,145 L 170,135 Z",
  TN: "M 185,340 L 220,335 L 230,360 L 210,380 L 185,370 L 175,355 Z",
  KL: "M 165,345 L 185,340 L 190,365 L 175,370 L 160,360 Z",
  AP: "M 220,275 L 250,270 L 260,295 L 250,315 L 225,310 L 215,290 Z",
  TG: "M 220,240 L 250,235 L 260,260 L 245,275 L 220,275 L 215,255 Z",
  MP: "M 170,190 L 215,185 L 230,200 L 225,225 L 195,230 L 170,215 Z",
  BR: "M 235,155 L 265,150 L 275,170 L 260,185 L 240,180 L 230,165 Z",
  WB: "M 260,170 L 290,165 L 300,185 L 295,200 L 275,195 L 260,185 Z",
  OR: "M 240,195 L 275,190 L 290,215 L 280,240 L 255,235 L 235,215 Z",
  CT: "M 215,200 L 240,195 L 250,215 L 245,235 L 225,230 L 210,215 Z",
  JK: "M 140,75 L 185,65 L 195,85 L 175,95 L 150,95 L 135,85 Z",
  HP: "M 180,90 L 205,85 L 210,105 L 195,110 L 175,105 Z",
  UK: "M 200,100 L 225,95 L 235,115 L 220,125 L 200,120 Z",
  AS: "M 280,90 L 320,85 L 335,100 L 320,115 L 290,110 L 275,100 Z",
  AR: "M 290,75 L 340,70 L 350,90 L 330,100 L 300,95 Z",
  NL: "M 305,100 L 335,95 L 345,110 L 325,120 L 310,115 Z",
  MN: "M 315,115 L 340,110 L 350,125 L 330,135 L 315,130 Z",
  MZ: "M 320,130 L 345,125 L 355,140 L 335,150 L 320,145 Z",
  TR: "M 295,115 L 320,110 L 325,125 L 310,130 L 295,125 Z",
  ML: "M 280,105 L 305,100 L 310,115 L 295,120 L 280,115 Z",
  SK: "M 255,90 L 275,85 L 280,100 L 265,105 L 255,100 Z",
  GA: "M 165,265 L 180,260 L 185,275 L 170,280 L 160,272 Z",
};

export function IndiaMapSection() {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const detail = selectedState ? stateDetails[selectedState] : null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF9933]/10 text-[#FF9933] text-sm font-medium mb-4">
            Interactive Map
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
            State Associations Across India
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Click on any state to see its association details and leadership
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* SVG Map */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
            <svg
              viewBox="0 0 450 420"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {states.map((state) => {
                const path = statePaths[state.code];
                if (!path) return null;
                const isActive = selectedState === state.code;
                const hasDetail = !!stateDetails[state.code];
                return (
                  <g key={state.code}>
                    <path
                      d={path}
                      fill={
                        isActive
                          ? "#FF9933"
                          : hasDetail
                          ? "#1e3a5f"
                          : "#cbd5e1"
                      }
                      fillOpacity={isActive ? 0.8 : hasDetail ? 0.6 : 0.3}
                      stroke={isActive ? "#FF9933" : "#fff"}
                      strokeWidth={isActive ? 2.5 : 1}
                      className={
                        hasDetail
                          ? "cursor-pointer transition-all duration-200 hover:fill-opacity-80 hover:stroke-[#FF9933] hover:stroke-2"
                          : ""
                      }
                      onClick={() => hasDetail && setSelectedState(state.code === selectedState ? null : state.code)}
                    />
                    {/* State code label for larger states */}
                    {["MH", "KA", "UP", "RJ", "MP", "TN", "AP", "GJ", "WB"].includes(state.code) && (
                      <text
                        x={
                          (statePaths[state.code]
                            ?.match(/\d+/g)
                            ?.map(Number)
                            .filter((_, i) => i % 2 === 0)
                            .reduce((a, b) => a + b, 0) || 0) /
                          (statePaths[state.code]?.match(/\d+/g)?.length ? statePaths[state.code]!.match(/\d+/g)!.length / 2 : 1) || 200
                        }
                        y={
                          (statePaths[state.code]
                            ?.match(/\d+/g)
                            ?.map(Number)
                            .filter((_, i) => i % 2 === 1)
                            .reduce((a, b) => a + b, 0) || 0) /
                          (statePaths[state.code]?.match(/\d+/g)?.length ? statePaths[state.code]!.match(/\d+/g)!.length / 2 : 1) || 200
                        }
                        textAnchor="middle"
                        fill="#fff"
                        fontSize="9"
                        fontWeight="bold"
                        className="pointer-events-none"
                      >
                        {state.code}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-1">
            {detail ? (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#FF9933]/20">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF9933]/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#FF9933]" />
                  </div>
                  <button
                    onClick={() => setSelectedState(null)}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-4">
                  {states.find((s) => s.code === selectedState)?.name}
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-500">Association</span>
                    <p className="font-medium text-[#0A2540]">
                      {detail.association}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Members</span>
                    <p className="font-medium text-[#0A2540]">
                      {detail.members.toLocaleString("en-IN")}+
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">President</span>
                    <p className="font-medium text-[#0A2540]">
                      {detail.president}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">
                  Click on a highlighted state to view its association details
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  {Object.keys(stateDetails).length} states with active associations
                </p>
              </div>
            )}

            {/* Leadership Preview */}
            <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                National Leadership
              </h4>
              <div className="space-y-3">
                {mockLeadership.map((leader) => (
                  <div
                    key={leader.name}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#FF9933]/20 flex items-center justify-center text-[#FF9933] font-bold text-sm">
                      {leader.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#0A2540]">
                        {leader.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {leader.role} — {leader.state}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}