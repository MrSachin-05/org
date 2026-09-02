"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Authenticated, Unauthenticated } from "convex/react";
import { useStoreUser } from "@/hooks/use-store-user";
import { BarLoader } from "react-spinners";
import { Building, Plus, Ticket } from "lucide-react";

const Header = () => {
  const { isLoading } = useStoreUser();

  const [showUpgardeModal, setShowUpgradeModal] = useState();

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
{/* Search & Location - Desktop Only */}

{/* Right Side Actions */}
<div className="flex items-center">
  <Button variant="ghost" size="sm" onClick={setShowUpgradeModal}>
    Pricing
  </Button>

  <Button variant="ghost" size="sm" asChild className="mr-2">
    <Link href="/explore">Explore</Link>
  </Button>
          <Authenticated>
  <div className="flex items-center gap-3">
    <Button size="sm" asChild className="flex gap-2 mr-4">
      <Link href="/create-event">
        <Plus className="w-4 h-4" />
        <span className="hidden sm:inline">Create Event</span>
      </Link>
    </Button>
    </div>

    <UserButton> 
      <UserButton.MenuItems>
      <UserButton.Link
        label="My Tickets"
        labelIcon={<Ticket size={16} />}
        href="/my-tickets"
      />

        <UserButton.Link
  label="My Events"
  labelIcon={<Building size={16} />}
  href="/my-events"
/>

      <UserButton.Action label="manageAccount" />
      </UserButton.MenuItems>
     </UserButton>

</Authenticated>

          {/* Convex + Clerk: Unauthenticated User */}
          <Unauthenticated>
            <Button
              size="sm"
              className="rounded-full bg-[#6c47ff] text-white hover:bg-[#7957ff]"
            >
              Sign In
            </Button>
          </Unauthenticated>

        </div>

        {/* Loading Bar */}
        {isLoading && (
          <div className="absolute bottom-0 left-0 w-full">
            <BarLoader
              width={"100%"}
              color="#8b5cf6"
              cssOverride={{
                background:
                  "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
              }}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;