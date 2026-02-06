"use client";

import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-center p-4">
        <RainbowKitCustomConnectButton />
      </header>
      <main className="flex flex-col flex-1 items-center justify-center px-4">
        <h1 className="text-center pt-10">P L A C E</h1>
      </main>
    </div>
  );
}
