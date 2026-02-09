'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GlobalError({ error }: { error: Error }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold">Нещо се обърка</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
        <p className="mt-2 text-muted-foreground">
          <Button asChild className="ml-2" variant="secondary">
            <Link href="/">Начало</Link>
          </Button>
        </p>
      </div>
    </div>
  )
}
