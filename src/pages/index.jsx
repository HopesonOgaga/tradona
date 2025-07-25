import React from "react";
import NavBar from "../components/nav";
import Footer from "../components/footre";
import TradingViewWidget from "../api/tape";
import LiveMarket from "../api/livemarket";
import FAQ from "../components/faq";
import Team from "../components/team";
import Testimony from "../components/testimony";

function Home() {
  return (
    <section className="bg-[#f5f7fa] min-h-screen font-sans text-gray-800">
      <NavBar />

      <TradingViewWidget />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-[80vh] px-4 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 text-white">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Trade Crypto With <span className="text-white/90">Confidence</span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/80">
            Join over{" "}
            <span className="font-semibold text-white">
              50,000 verified traders
            </span>{" "}
            who trust CryptoFXtradePro for secure and efficient crypto trading.
          </p>
          <a
            href="https://cryptofxtradepro.com/auth/register.php"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-200 shadow-md"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="py-12 bg-white border-t text-center text-gray-700">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 inline-block pb-1">
            Platform Stats
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-6">
            <div>
              <p className="text-2xl font-bold text-blue-600">50,000+</p>
              <p className="text-sm text-gray-500">Active Traders</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">$2.5B+</p>
              <p className="text-sm text-gray-500">Traded Volume</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">150+</p>
              <p className="text-sm text-gray-500">Currencies Supported</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">99.9%</p>
              <p className="text-sm text-gray-500">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="py-12 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-4 border-blue-500 inline-block pb-1">
            Portfolio Overview
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* BTC */}
            <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-yellow-500">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Bitcoin (BTC)</h3>
                <span className="text-yellow-500 text-xl font-bold">₿</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Holdings: 0.85 BTC</p>
              <p className="text-sm text-gray-400">~$51,000</p>
            </div>

            {/* ETH */}
            <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-indigo-500">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Ethereum (ETH)</h3>
                <span className="text-indigo-500 text-xl font-bold">Ξ</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Holdings: 5.2 ETH</p>
              <p className="text-sm text-gray-400">~$16,000</p>
            </div>

            {/* SOL */}
            <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-teal-500">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Solana (SOL)</h3>
                <span className="text-teal-500 text-xl font-bold">◎</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Holdings: 120 SOL</p>
              <p className="text-sm text-gray-400">~$14,400</p>
            </div>

            {/* XRP */}
            <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-blue-500">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">XRP</h3>
                <span className="text-blue-500 text-xl font-bold">✕</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Holdings: 3,000 XRP</p>
              <p className="text-sm text-gray-400">~$1,500</p>
            </div>

            {/* Others */}
            <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-gray-400">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Other Holdings</h3>
                <span className="text-gray-500 text-xl font-bold">…</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Various Tokens</p>
              <p className="text-sm text-gray-400">~$3,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-12 bg-white px-4 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-4 border-blue-500 inline-block pb-1">
            Market Overview
          </h2>
          <LiveMarket />
        </div>
      </section>

      <section><Team /></section>
      <section><Testimony /></section>

      {/* FAQ */}
      <section>
        <FAQ />
      </section>

      <Footer />
    </section>
  );
}

export default Home;
