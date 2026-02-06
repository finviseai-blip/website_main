import React from "react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-16">

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#D4AF37]">
          Privacy Policy
        </h1>

        <p className="mb-8 text-gray-300 leading-relaxed">
          At Finvise, we value your privacy and are committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, and safeguard your data.
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
    title: "Information We Collect",
    content:
      "We may collect personal information such as name, email address, and usage data when you interact with our website and services.",
  },
  {
    title: "How We Use Information",
    content:
      "Collected information is used to improve our services, provide customer support, personalize user experience, and enhance platform functionality.",
  },
  {
    title: "Data Protection",
    content:
      "We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, or disclosure.",
  },
  {
    title: "Third-Party Services",
    content:
      "Our platform may use third-party services such as analytics and performance tools that collect anonymized usage data to help improve the platform.",
  },
  {
    title: "Your Rights",
    content:
      "Users have the right to request access to their data, request deletion, or inquire about how their information is being used.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this policy from time to time. Any changes will be reflected on this page and take effect immediately upon posting.",
  },
];
