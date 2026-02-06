import React from "react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-16">

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#D4AF37]">
          Terms of Service
        </h1>

        <p className="mb-8 text-gray-300 leading-relaxed">
          Welcome to Finvise. These Terms of Service govern your use of our website and services.
          By accessing or using Finvise, you agree to comply with and be bound by these terms.
        </p>

        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-[#0e0e0e] border border-[#D4AF37]/20 rounded-xl p-6 mb-6 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-3 text-[#D4AF37]">
              {section.title}
            </h2>

            <p className="text-gray-300 leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}

        <p className="mt-10 text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>

      </div>
    </main>
  );
}

const sections = [
  {
    title: "Use of Service",
    content:
      "You agree to use this platform only for lawful purposes and in accordance with these terms. Unauthorized use, manipulation, or misuse of the platform is strictly prohibited and may result in termination of access.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content, design, branding, and materials on this website are the exclusive property of Finvise unless otherwise stated. Reproduction, redistribution, or commercial use without prior written permission is prohibited.",
  },
  {
    title: "Limitation of Liability",
    content:
      "Finvise is not responsible for any financial, investment, or business decisions made based on the information or tools provided through our platform. Users act at their own discretion.",
  },
  {
    title: "User Responsibilities",
    content:
      "Users must provide accurate information and are responsible for maintaining the confidentiality of their accounts. Any activity conducted under a user account is the sole responsibility of the account holder.",
  },
  {
    title: "Changes to Terms",
    content:
      "We reserve the right to modify these terms at any time. Continued use of the platform after changes are made indicates acceptance of the updated terms.",
  },
];
