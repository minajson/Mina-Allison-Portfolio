import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-slate-800">
      <div className="max-w-6xl mx-auto text-center text-slate-400">
        © {new Date().getFullYear()} Mina Allison • Built with React, Tailwind & ❤️ for Environmental Health
      </div>
    </footer>
  );
}
