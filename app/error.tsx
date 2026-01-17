'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GlobalError({ error }: { error: Error }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold">Нещо се обърка</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
        <p className="mt-2 text-muted-foreground">
          Моля, опитайте отново по-късно.
        </p>
        <Button asChild>
            <Link href="/sign-in">Sign in</Link>
        </Button>
      </div>
    </div>
  )
}
