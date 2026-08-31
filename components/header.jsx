"use client";

import Link from "next/link";
import Image from "next/image";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { BarLoader } from "react-spinners";

const Header = () => {
  const { isLoaded, isSignedIn } = useUser();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-2 py-4 flex items-center justify-between">
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

        <div className="flex items-center gap-2">
          {!isLoaded ? null : isSignedIn ? (
            <UserButton />
          ) : (
            <SignInButton mode="modal">
              <Button
                size="sm"
                className="rounded-full bg-[#6c47ff] text-white hover:bg-[#7957ff]"
              >
                Sign In
              </Button>
            </SignInButton>
          )}
        </div>
         <div className="absolute bottom-0 left-0 w-full">
            <BarLoader width={"100%"} color="#a855f7" />
          </div>
      </div>
    </nav>
  );
};

export default Header;