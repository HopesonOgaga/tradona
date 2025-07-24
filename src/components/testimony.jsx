import React from "react";

const testimonies = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    testimony:
      "CryptoPro has transformed the way I engage with the crypto market. Its real-time updates, clean UI, and reliable trading features make it my go-to platform. Security is always top-notch, and the community behind it is growing fast. I’ve recommended it to friends and business partners and they all had a great experience.",
  },
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    testimony:
      "As a CTO, I’m impressed by the platform’s speed and reliability. CryptoPro handles thousands of concurrent users without lag or downtime. Our development team constantly ships new features while maintaining the core integrity of the app. From trading to portfolio tracking, it’s a powerful tool for any level of crypto investor.",
  },
  {
    name: "Dries Vincent",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    testimony:
      "Working with institutional partners has been seamless thanks to CryptoPro’s API and integration capabilities. It’s not just about trading—it’s about building trust and transparency. Clients constantly praise how intuitive and robust our platform is. I believe this will be the benchmark for crypto platforms in the next 5 years.",
  },
  {
    name: "Lindsay Walton",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    testimony:
      "Designing and building CryptoPro has been an incredible experience. Our users love the responsive design and smooth navigation across mobile and desktop. We focus on usability and accessibility, ensuring everyone can trade confidently. It’s rewarding to see the positive feedback from the community—it pushes us to keep improving.",
  },
  {
    name: "Courtney Henry",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    testimony:
      "CryptoPro’s visual identity speaks volumes. Our goal was to create a brand that reflects trust, innovation, and professionalism. Every design decision, from colors to typography, was made with purpose. I’m proud of how far we’ve come—users frequently mention how the platform feels modern yet familiar, which is exactly what we aimed for.",
  },
  {
    name: "Tom Cook",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    testimony:
      "Product development at CryptoPro revolves around listening to our users. Every feature on the platform—from advanced charting to educational content—came from user feedback. We prioritize simplicity without compromising on power. Crypto trading shouldn’t be complicated, and our team is committed to delivering tools that empower both beginners and pros.",
  },
];

export default function Testimony() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What Our Team Says
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
