"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamic import to avoid SSR issues
const IndiaMapComponent: any = dynamic(
  () => import("@vishalvoid/react-india-map").then((mod: any) => mod.IndiaMap),
  { ssr: false }
);

const stateDetails: Record<string, {
  association: string;
  president: string;
  members: string;
  contact: string;
}> = {
  "Delhi": { association: "Delhi IT Dealers Association", president: "Rajesh Sharma", members: "5,200", contact: "011-XXXX-XXXX" },
  "Maharashtra": { association: "Maharashtra Computer Dealers Association", president: "Meena Gupta", members: "8,400", contact: "022-XXXX-XXXX" },
  "Karnataka": { association: "Karnataka IT Trade Association", president: "Ravi Kumar", members: "6,100", contact: "080-XXXX-XXXX" },
  "Tamil Nadu": { association: "Tamil Nadu Computer Dealers Association", president: "Lakshmi Iyer", members: "4,800", contact: "044-XXXX-XXXX" },
  "Telangana": { association: "Telangana IT Dealers Association", president: "Sunita Reddy", members: "3,900", contact: "040-XXXX-XXXX" },
  "Gujarat": { association: "Gujarat Computer Dealers Association", president: "Amit Patel", members: "4,500", contact: "079-XXXX-XXXX" },
  "West Bengal": { association: "West Bengal IT Association", president: "Arun Das", members: "3,200", contact: "033-XXXX-XXXX" },
  "Kerala": { association: "Kerala IT Dealers Association", president: "Priya Nair", members: "2,800", contact: "048-XXXX-XXXX" },
  "Punjab": { association: "Punjab Computer Traders Association", president: "Vikram Singh", members: "2,100", contact: "0172-XXXX-XXXX" },
  "Rajasthan": { association: "Rajasthan IT Dealers Association", president: "Kiran Sharma", members: "2,600", contact: "0141-XXXX-XXXX" },
};

export default function InteractiveIndiaMap() {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const handleStateClick = (stateId: string) => {
    // stateId comes as "IN-DL", "IN-MH", etc. Extract the state name from the SVG title
    // The package passes the stateId which is the SVG path id like "IN-DL"
    // We need to map these to display names
    const stateNameMap: Record<string, string> = {
      "IN-DL": "Delhi",
      "IN-MH": "Maharashtra",
      "IN-KA": "Karnataka",
      "IN-TN": "Tamil Nadu",
      "IN-TG": "Telangana",
      "IN-GJ": "Gujarat",
      "IN-WB": "West Bengal",
      "IN-KL": "Kerala",
      "IN-PB": "Punjab",
      "IN-RJ": "Rajasthan",
      "IN-AP": "Andhra Pradesh",
      "IN-UP": "Uttar Pradesh",
      "IN-MP": "Madhya Pradesh",
      "IN-BR": "Bihar",
      "IN-HR": "Haryana",
      "IN-CT": "Chhattisgarh",
      "IN-JH": "Jharkhand",
      "IN-OR": "Odisha",
      "IN-AS": "Assam",
      "IN-AR": "Arunachal Pradesh",
      "IN-MN": "Manipur",
      "IN-ML": "Meghalaya",
      "IN-MZ": "Mizoram",
      "IN-NL": "Nagaland",
      "IN-TR": "Tripura",
      "IN-SK": "Sikkim",
      "IN-UT": "Uttarakhand",
      "IN-HP": "Himachal Pradesh",
      "IN-JK": "Jammu and Kashmir",
      "IN-GA": "Goa",
    };
    const displayName = stateNameMap[stateId] || stateId;
    setSelectedState(displayName);
  };

  const detail = selectedState ? stateDetails[selectedState] : null;

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      <div className="flex-1 w-full">
        {IndiaMapComponent ? (
          <IndiaMapComponent
            onStateClick={handleStateClick}
            mapStyle={{
              backgroundColor: "#0A0A0F",
              hoverColor: "#00D4AA",
              stroke: "#00D4AA",
              strokeWidth: 0.5,
            }}
          />
        ) : (
          <div className="p-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-center">
            <p className="text-[#A0A0B0]">India Map loading...</p>
          </div>
        )}
      </div>

      <div className="w-full lg:w-80">
        {detail ? (
          <div className="p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08]">
            <h3 className="text-2xl font-bold text-white mb-4">{selectedState}</h3>
            <div className="space-y-4">
              <div>
                <p className="text-[#6B6B7B] text-xs uppercase tracking-wider mb-1">Association</p>
                <p className="text-white text-sm">{detail.association}</p>
              </div>
              <div>
                <p className="text-[#6B6B7B] text-xs uppercase tracking-wider mb-1">President</p>
                <p className="text-white text-sm">{detail.president}</p>
              </div>
              <div>
                <p className="text-[#6B6B7B] text-xs uppercase tracking-wider mb-1">Members</p>
                <p className="text-[#00D4AA] text-2xl font-bold">{detail.members}</p>
              </div>
              <div>
                <p className="text-[#6B6B7B] text-xs uppercase tracking-wider mb-1">Contact</p>
                <p className="text-white text-sm">{detail.contact}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] text-center">
            <p className="text-[#A0A0B0] text-sm">Click on a state to view association details</p>
          </div>
        )}
      </div>
    </div>
  );
}