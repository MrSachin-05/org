import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Show,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

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

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">

          {/* Signed In */}
          <Show when="signed-in">
            {/* Create Event */}
            <UserButton />
          </Show>

          {/* Signed Out */}
          <Show when="signed-out">
            <SignInButton mode="modal">
              <Button
                size="sm"
                className="rounded-full bg-[#6c47ff] text-white hover:bg-[#7957ff]"
              >
                Sign In
              </Button>
            </SignInButton>
          </Show>

        </div>

      </div>
    </nav>
  );
};

export default Header;