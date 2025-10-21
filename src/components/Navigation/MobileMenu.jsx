import React from "react";

export default function MobileMenu({ navItems = [], isOpen, onNavigate }) {
  if (!isOpen) return null;
  return (
    <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={(e) => { e.preventDefault(); onNavigate(item.toLowerCase()); }}
          className="block px-4 py-3 text-slate-200 hover:text-green-400 hover:bg-slate-800 transition"
        >
          {item}
        </a>
      ))}
    </div>
  );
}
