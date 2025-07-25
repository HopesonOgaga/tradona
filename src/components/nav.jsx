import React, { useState } from "react";
import { X, Menu } from "lucide-react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative">
      {/* Desktop View */}
      <section className="hidden md:flex justify-between items-center px-4 py-3 bg-white shadow-sm">
        <div>
          <p className="text-xl font-bold capitalize">cryptofxtradepro</p>
        </div>
        <div className="flex gap-3">
          <a
            href="https://cryptofxtradepro.com/auth/"
            className="text-center bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:opacity-90 transition"
          >
            Login
          </a>
          <a
            href="https://cryptofxtradepro.com/auth/register.php"
            className="text-center border border-black py-2 px-4 rounded-md font-semibold text-black hover:bg-gray-100 transition"
          >
            Register
          </a>
        </div>
      </section>

      {/* Mobile Top Bar */}
      <section className="flex justify-between items-center md:hidden px-4 py-3 bg-white shadow-md">
        <p className="text-xl font-bold capitalize">cryptofxtradepro</p>
        <Menu className="w-7 h-7 cursor-pointer" onClick={() => setIsOpen(true)} />
      </section>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <p className="text-xl font-bold">Menu</p>
          <X className="w-6 h-6 cursor-pointer" onClick={() => setIsOpen(false)} />
        </div>
        <div className="flex flex-col gap-4 p-6">
          <a
            href="https://cryptofxtradepro.com/auth/"
            className="text-center bg-blue-600 text-white py-2 rounded-md font-semibold hover:opacity-90 transition"
            onClick={() => setIsOpen(false)}
          >
            Login
          </a>
          <a
            href="https://cryptofxtradepro.com/auth/register.php"
            className="text-center border border-black py-2 rounded-md font-semibold text-black hover:bg-gray-100 transition"
            onClick={() => setIsOpen(false)}
          >
            Register
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </section>
  );
}

export default NavBar;
