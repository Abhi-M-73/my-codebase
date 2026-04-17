import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { bsc } from "wagmi/chains";

export const config = getDefaultConfig({
    appName: "Web3 Pay",
    projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
    chains: [bsc],
    ssr: false,
});