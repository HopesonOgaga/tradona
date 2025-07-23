import React, { useState } from "react";
import { X, Menu, Search } from "lucide-react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative">
      {/* Desktop View */}
      <section className="hidden md:flex justify-between items-center px-4 py-3 bg-white shadow-sm">
        <div>
          <p className="text-xl font-bold capitalize">crypto trade</p>
        </div>
        <ul className="flex gap-6 capitalize text-lg font-semibold">
          <li className="hover:text-blue-500 hover:underline cursor-pointer">products</li>
          <li className="hover:text-blue-500 hover:underline cursor-pointer">community</li>
          <li className="hover:text-blue-500 hover:underline cursor-pointer">market</li>
          <li className="hover:text-blue-500 hover:underline cursor-pointer">brokers</li>
          <li className="hover:text-blue-500 hover:underline cursor-pointer">more</li>
        </ul>
        <div>
          <p className="text-xl capitalize cursor-pointer">get started</p>
        </div>
      </section>

      {/* Mobile Top Bar */}
      <section className="flex justify-between items-center md:hidden px-4 py-3 bg-white shadow-md">
        <p className="text-xl font-bold capitalize">cryptotrade</p>
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
        <ul className="flex flex-col gap-6 p-6 text-lg capitalize font-medium">
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => setIsOpen(false)}>products</li>
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => setIsOpen(false)}>community</li>
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => setIsOpen(false)}>market</li>
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => setIsOpen(false)}>brokers</li>
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => setIsOpen(false)}>more</li>
          <li className="pt-4 border-t hover:text-blue-500 cursor-pointer" onClick={() => setIsOpen(false)}>get started</li>
        </ul>
      </div>

      {/* Backdrop when menu is open */}
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
