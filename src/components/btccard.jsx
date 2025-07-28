import React, { useEffect, useState } from "react";

function Btccard() {
  const [btcPrice, setBtcPrice] = useState(null);

  // Fetch BTC price on component mount
  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );
        const data = await res.json();
        setBtcPrice(data.bitcoin.usd);
      } catch (err) {
        console.error("Failed to fetch BTC price:", err);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 10000); // refresh every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="p-4 md:p-8 max-w-3xl mx-auto font-sans">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-2xl p-6 text-white flex flex-col md:flex-row items-center justify-between shadow-lg">
        <div className="flex items-center gap-4">
          <img
            src="/images/bitcoin-wallet.png"
            alt="Bitcoin"
            className="w-8 h-8"
          />
          <p className="text-2xl font-bold capitalize">Buy Bitcoin Instantly</p>
        </div>
      </section>

      {/* Price section */}
      <section className="flex flex-col md:flex-row justify-between items-center mt-6 bg-white p-4 rounded-lg shadow-md">
        <div>
          <p className="text-gray-600 text-sm">Current BTC Price</p>
          <p className="text-xl font-bold text-gray-900">
            {btcPrice ? `$${btcPrice.toLocaleString()}` : "Loading..."}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-3 md:mt-0">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <p className="text-green-600 font-semibold uppercase text-sm">Live</p>
        </div>
      </section>
        <div className="mt-4 "><p className="text-sm font-light italic ">minimun desposit: $550.00</p></div>
      {/* Deposit form */}
      <section className="mt-6 bg-gray-50 p-6 rounded-lg shadow">
        <form className="flex flex-col gap-4">
          <label className="text-sm font-medium text-gray-700">Amount (BTC)</label>
          <input
            type="text"
            placeholder="0.0000"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </form>
      
        {/* Address Section */}
        <div className="mt-6">
          <p className="text-sm text-gray-600">Send to this address:</p>
          <p className="font-mono text-sm text-gray-900 break-all mt-1 bg-white p-2 rounded">
            bc1qhqnucnag35z549kj72g79eqm4p6ppl954rut7m
          </p>
        </div>
      </section>
    </section>
  );
}

export default Btccard;
