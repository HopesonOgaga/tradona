import React from "react";

const testimonies = [
  {
    name: "Aria Kim",
    role: "Lead Blockchain Engineer",
    imageUrl:
      "https://randomuser.me/api/portraits/women/44.jpg",
    testimony:
      "The infrastructure behind Cryptofxtradepro is world-class. From the blockchain integrations to real-time trade matching, everything is engineered with precision. We've designed the backend to scale securely while supporting future protocol upgrades. This platform is a dream to work on, and it shows in the seamless user experience we provide to traders every day.",
  },
  {
    name: "Julian Vega",
    role: "Senior UX Strategist",
    imageUrl:
      "https://randomuser.me/api/portraits/men/36.jpg",
    testimony:
      "When we designed Cryptofxtradepro, our focus was clarity and control. Users don’t want to fight with interfaces—they want frictionless access to insights and trades. Every button, chart, and interaction is built with intent. We constantly test and iterate based on feedback, and that feedback loop has made the product sharper with each update.",
  },
  {
    name: "Fatima Idris",
    role: "Marketing Director",
    imageUrl:
      "https://randomuser.me/api/portraits/women/65.jpg",
    testimony:
      "Promoting Cryptofxtradepro has been incredibly fulfilling because the product speaks for itself. Our campaigns focus on education and empowerment—helping people understand crypto, not fear it. The community has grown organically because we deliver value consistently. Watching traders share their success stories through our platform is the best marketing we could ask for.",
  },
  {
    name: "Hassan Olamide",
    role: "Risk & Compliance Officer",
    imageUrl:
      "https://randomuser.me/api/portraits/men/52.jpg",
    testimony:
      "Compliance and user trust are non-negotiables at Cryptofxtradepro. We operate under strict internal protocols that exceed industry standards, from AML screening to transaction monitoring. Security measures are not just technical—they’re cultural here. Traders can rest easy knowing their assets and data are protected by a system that’s proactive, not reactive.",
  },
  {
    name: "Emma Laurent",
    role: "Community Manager",
    imageUrl:
      "https://randomuser.me/api/portraits/women/68.jpg",
    testimony:
      "Our users are at the heart of everything we do. Whether it's launching giveaways, AMAs, or educational content, we keep the community informed and engaged. I've witnessed beginners grow into confident investors thanks to the tools and support we offer. It's more than trading—it's a movement, and I'm proud to be part of it.",
  },
  {
    name: "Victor Chen",
    role: "Lead Data Scientist",
    imageUrl:
      "https://randomuser.me/api/portraits/men/88.jpg",
    testimony:
      "Behind every trading decision is data. At Cryptofxtradepro, we analyze terabytes of market signals daily to power smart alerts, price predictions, and user insights. Our machine learning models are constantly evolving to adapt to market conditions. We're not just building features—we're giving users a data advantage they can actually use.",
  },
];


export default function Testimony() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Testimonies
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonies.map((person, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={person.imageUrl}
                  alt={person.name}
                  className="w-14 h-14 rounded-full object-cover border"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {person.name}
                  </h3>
                  <p className="text-sm text-indigo-600">{person.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {person.testimony}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
