"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Alert, AlertDescription } from "@repo/design/components/ui/alert";
import { Button } from "@repo/design/components/ui/button";
import { Spinner } from "@repo/design/components/ui/spinner";
import { CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const error = searchParams.get("error");

    if (error) {
      setStatus("error");
      setMessage(
        error === "invalid_token" || error === "INVALID_TOKEN"
          ? "This verification link is invalid or has expired."
          : "An error occurred during verification."
      );
      return;
    }

    // If we reached this page without an error, verification was successful
    // (BetterAuth redirects here after successfully verifying the token)
    setStatus("success");
    setMessage("Your email has been verified successfully!");
    
    // Redirect to sign-in after 3 seconds
    setTimeout(() => {
      router.push("/sign-in");
    }, 3000);
  }, [searchParams, router]);

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Email Verification</h1>
      </div>

      {status === "loading" && (
        <div className="flex flex-col items-center justify-center space-y-4 py-8">
          <Spinner className="h-8 w-8" />
          <p className="text-muted-foreground text-sm">Verifying your email...</p>
        </div>
      )}

        {status === "success" && (
          <Alert className="border-success/20 bg-success/5">
            <CheckCircle className="h-4 w-4 text-success" />
            <AlertDescription className="text-success">{message}</AlertDescription>
          </Alert>
        )}

      {status === "error" && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}

      {status === "success" && (
        <div className="space-y-4">
          <p className="text-muted-foreground text-center text-sm">
            Redirecting you to sign in...
          </p>
          <Button asChild className="w-full">
            <Link href="/sign-in">Continue to Sign In</Link>
          </Button>
        </div>
      )}

      {status === "error" && (
        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/sign-up">Back to Sign Up</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/sign-in">Go to Sign In</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
