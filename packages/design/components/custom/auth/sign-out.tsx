"use client";

import { signOut } from "@repo/auth/client";
import { Button } from "@repo/design/components/ui/button";
import { LogOut } from "lucide-react";
import { useState } from "react";

export const SignOutButton = () => {
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      await signOut();
      window.location.href = "/sign-in";
    } catch (error) {
      console.error("Sign out error:", error);
      setIsSigningOut(false);
    }
  };

  return (
    <Button
      onClick={handleSignOut}
      variant="ghost"
      size="sm"
      disabled={isSigningOut}
    >
      <LogOut className="h-4 w-4" />
      {isSigningOut ? "Signing out..." : "Sign out"}
    </Button>
  );
};

