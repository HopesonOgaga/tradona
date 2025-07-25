import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "Why should I trust Cryptofxtradepro with my investments?",
    answer:
      "Over 50,000 verified traders trust us. We offer secure wallets, regulatory compliance, and 24/7 protection of your digital assets.",
  },
  {
    question: "What makes Cryptofxtradepro better than other trading platforms?",
    answer:
      "We combine institutional-grade features with an easy-to-use interface, offering you both power and simplicity. Plus, 99.9% uptime means you're always in the market.",
  },
  {
    question: "Is this platform suitable for beginners?",
    answer:
      "Absolutely. With guided onboarding, real-time support, and risk-free demo trading, even first-timers can trade with confidence.",
  },
  {
    question: "How secure is my portfolio?",
    answer:
      "Security is our top priority. We use cold wallet storage, end-to-end encryption, and constant security audits to ensure your assets stay safe.",
  },
  {
    question: "Are there hidden fees or commissions?",
    answer:
      "No surprises here. Our fee structure is transparent, fair, and simple. You only pay for what you trade — no hidden costs, ever.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Why Invest With Cryptofxtradepro?
        </h2>
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg shadow-sm transition"
              >
                <button
                  className="w-full flex justify-between items-center p-5 text-left hover:bg-blue-50"
                  onClick={() => toggleFAQ(idx)}
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="text-blue-600" />
                  ) : (
                    <ChevronDown className="text-blue-600" />
                  )}
                </button>
                <div
                  className={`px-5 pb-5 text-gray-600 text-sm transition-all duration-300 ease-in-out ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
