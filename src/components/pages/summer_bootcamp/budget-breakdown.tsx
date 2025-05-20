import React from "react";

// Define TypeScript interfaces
interface BudgetItem {
  name: string;
  amount: number;
  description: string;
  icon: string;
  pColor: string;
}

const BudgetBreakdown: React.FC = () => {
  // Budget data
  const budgetItems: BudgetItem[] = [
    {
      name: "YOUTH STIPENDS",
      amount: 4800,
      description: "Valuing youth expertise & removing barriers",
      icon: "👥",
      pColor: "#DC2626",
    },
    {
      name: "BREAKFAST & LUNCH",
      amount: 4000,
      description: "Breaking bread and building community",
      icon: "🍎",
      pColor: "#16A34A",
    },
    {
      name: "GUEST SPEAKER STIPENDS",
      amount: 1500,
      description: "Insights who specialize in different areas of wellness",
      icon: "🎤",
      pColor: "#DC2626",
    },
    {
      name: "ACTIVITY MATERIALS",
      amount: 1000,
      description: "Tools for creative expression & connection",
      icon: "🎨",
      pColor: "#16A34A",
    },
    {
      name: "STAFF & PROFESSIONAL OVERSIGHT",
      amount: 5400,
      description: "Keeping it engaging, impactful, and organized",
      icon: "🛡️",

      pColor: "#DC2626",
    },
    {
      name: "CONTINGENCY FUND",
      amount: 1300,
      description:
        "Preparing for unforeseen expenses or minor implementation adjustments",
      icon: "🔄",
      pColor: "#16A34A",
    },
  ];

  const total: number = budgetItems.reduce((sum, item) => sum + item.amount, 0);

  // Calculate percentage for visual bars
  const getPercentage = (amount: number): number => {
    return (amount / total) * 100;
  };

  return (
    <div
      style={{
        padding: "40px",
        borderRadius: "20px",
        maxWidth: "768px",
        margin: "50px auto",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "800",
          color: "white",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        DRAFT BUDGET BREAKDOWN
      </h1>
      <h2
        style={{
          fontSize: "20px",
          color: "#B3B3B3",
          textAlign: "center",
          marginBottom: "24px",
        }}
      >
        BUILDING A YOUTH SUPPORT NETWORK: PHASE 1 - SUMMER TRAINING
      </h2>
      <div style={{ display: "grid", gap: "16px" }}>
        {budgetItems.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#1F1F2A",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 2px 2px #1F2937",
              transition: "transform 0.3s",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span style={{ fontSize: "24px" }}>{item.icon}</span>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "white",
                  }}
                >
                  {item.name}
                </h3>
              </div>
              <span
                style={{ fontSize: "20px", fontWeight: "700", color: "white" }}
              >
                ${item.amount.toLocaleString()}
              </span>
            </div>
            <p style={{ color: "#B3B3B3", marginTop: "8px" }}>
              {item.description}
            </p>
            <div
              style={{
                backgroundColor: "#1F2937",
                borderRadius: "8px",
                height: "8px",
                marginTop: "12px",
              }}
            >
              <div
                style={{
                  backgroundColor: item.pColor, // Corrected here
                  height: "8px",
                  borderRadius: "8px",
                  width: `${getPercentage(item.amount)}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          backgroundColor: "#1F1F2A",
          color: "white",
          padding: "24px",
          borderRadius: "15px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3 style={{ fontSize: "24px", fontWeight: "700" }}>TOTAL BUDGET</h3>
        <span style={{ fontSize: "24px", fontWeight: "700" }}>
          ${total.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default BudgetBreakdown;
