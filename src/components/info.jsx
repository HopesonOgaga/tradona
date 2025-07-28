import React from "react";

const info = [
  {
    image: "https://img.icons8.com/ios-filled/100/60A5FA/instant-camera.png",
    title: "Instant Transactions",
    text: "Bitcoin purchases are processed instantly with real-time confirmation.",
  },
  {
    image: "https://img.icons8.com/ios-filled/100/60A5FA/lock--v1.png",
    title: "Bank Grade Security",
    text: "Your transactions are protected with military-grade encryption and blockchain-level security.",
  },
  {
    image: "https://img.icons8.com/ios-filled/100/60A5FA/qr-code.png",
    title: "QR Code Support",
    text: "Scan QR codes for quick, secure, and error-free address input.",
  },
];

function Info() {
  return (
    <section className="  py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 tracking-wide">
          Powering Seamless Crypto Transactions
        </h2>
        <p className="text-gray-400 mt-4 text-sm md:text-base">
          Experience unmatched speed, security, and simplicity with our BTC platform.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {info.map((item, index) => (
          <div
            key={index}
            className=" rounded-xl p-6 border border-blue-900 shadow-md hover:shadow-blue-400/30 transition duration-300"
          >
            <div className="flex justify-center mb-4">
              <img src={item.image} alt={item.title} className="w-14 h-14" />
            </div>
            <h3 className="text-xl font-semibold text-blue-300 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Info;
