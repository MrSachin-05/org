import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-2 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
          aria-label="Aristocraft Home"
        >
          <Image
            src="/aristocraft.png"
            alt="Aristocraft logo"
            width={180}
            height={50}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

      </div>
    </nav>
  );
};

export default Header;