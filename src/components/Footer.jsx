import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="mt-10 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid sm:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-lg font-semibold">Let’s build something stunning</h3>
            <p className="mt-1 text-sm text-white/70">
              Open to freelance, collaborations, and security consulting.
            </p>
          </div>
          <div className="sm:text-right">
            <a
              href="mailto:hello@candyx3.dev"
              className="inline-block rounded-lg bg-white text-black px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition"
            >
              Email Me
            </a>
          </div>
        </div>
        <p className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} Candyx3. All rights reserved.</p>
      </div>
    </footer>
  );
}
