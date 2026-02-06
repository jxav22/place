# place

<p align="center">
  <strong>Wallet-native event analytics.</strong> POAPs + ENS → real engagement & retention metrics.
</p>

<p align="center">
  <a href="https://ethglobal.com/events/hackmoney2026/" target="_blank">
    <img src="https://img.shields.io/badge/Built%20at-HackMoney%202026-purple" alt="HackMoney 2026" />
  </a>
  <a href="https://ethglobal.com/showcase/place-6qabo" target="_blank">
    <img src="https://img.shields.io/badge/Showcase-ETHGlobal-blue" alt="ETHGlobal Showcase" />
  </a>
  <img src="https://img.shields.io/badge/Status-Proof%20of%20concept-yellow" alt="Proof of concept" />
</p>

---

> **Proof of concept — nothing implemented yet.**  
> This repository is a **proof of concept**. No place-specific features are implemented yet — only the Scaffold-ETH 2 stack and a placeholder frontend. The idea and direction are documented here; implementation is early-stage and open to collaboration.

---

## Idea

**place** shows sponsors who actually showed up, who engaged (not just farmed), and who return across events — using **POAPs** and **ENS-linked identities**. It turns that into comparable ROI metrics for better targeting and sponsor proof.

---

## Links

| Resource        | URL |
|----------------|-----|
| **GitHub**     | [github.com/jxav22/place](https://github.com/jxav22/place) |
| **ETHGlobal showcase** | [ethglobal.com/showcase/place-6qabo](https://ethglobal.com/showcase/place-6qabo) |

---

## Running this repo

This repo is built on [Scaffold-ETH 2](https://github.com/scaffold-eth/scaffold-eth-2). Running it gives you the local chain, deploy pipeline, and Next.js app — you will see the scaffold/placeholder app, not a working place product.

**Requirements:** [Node (>= v20.18.3)](https://nodejs.org/en/download/), [Yarn](https://yarnpkg.com/getting-started/install), [Git](https://git-scm.com/downloads).

```bash
yarn install
yarn chain    # Terminal 1: local chain
yarn deploy   # Terminal 2: deploy contracts
yarn start    # Terminal 3: Next.js at http://localhost:3000
```

- Smart contracts: `packages/foundry/contracts` (or `packages/hardhat/contracts` if Hardhat)
- Frontend: `packages/nextjs/app/page.tsx`
- See [AGENTS.md](AGENTS.md) for full scaffold commands and architecture.

---

## Get involved

Early-stage project; currently solo and **open to collaboration**. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Tech

Stack (from Scaffold-ETH 2): Next.js, RainbowKit, Wagmi, Viem, TypeScript, Foundry (or Hardhat), Tailwind CSS with DaisyUI.
