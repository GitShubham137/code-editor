import { Button } from "@/components/ui/button";
import UserButton from "@/modules/auth/components/user-button";
import { User } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Button>
        Get Started with me
      </Button>
      <UserButton/>
    </div>
  );
}
