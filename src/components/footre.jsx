import React from "react";

const footerLinks = {
  Products: ["Exchange", "Wallet", "Trading Terminal", "Staking"],
  Company: ["About Us", "Careers", "Blog", "Press"],
  Support: ["Help Center", "Security", "API Docs", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Licenses"],
};

function Footer() {
  return (
    <footer className="bg-blue-600 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-xl font-bold mb-2 capitalize">crypto trade</h2>
          <p className="text-sm text-blue-100">Trade crypto with confidence.</p>
        </div>

        {/* Dynamic Link Columns */}
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <h3 className="text-md font-semibold mb-3">{section}</h3>
            <ul className="space-y-2 text-sm">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:underline text-blue-100 hover:text-white transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-700 text-center text-sm py-4 px-4 text-blue-200">
        © {new Date().getFullYear()} crypto trade. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
