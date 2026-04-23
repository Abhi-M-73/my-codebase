import { useState } from "react";
import { Coins, Wallet, TrendingUp, Shield, Zap, ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";
import { makeInvestment } from "../../../api/user.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ResponseModel from "../../../components/ui/ResponseModel";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useWriteContract } from "wagmi";
import { parseUnits } from "viem";

const isTestMode = true;
const USDT_ADDRESS = "0x55d398326f99059fF775485246999027B3197955";
const USDT_ABI = [
    {
        name: "transfer",
        type: "function",
        stateMutability: "nonpayable",
        inputs: [
            { name: "to", type: "address" },
            { name: "value", type: "uint256" },
        ],
        outputs: [{ type: "bool" }],
    },
];

const QUICK_AMOUNTS = [10, 50, 100, 500];

const UserMakeInvestment = () => {
    const queryClient = useQueryClient();
    const [amount, setAmount] = useState("");
    const [modal, setModal] = useState(null);
    const [focused, setFocused] = useState(false);
    const { address, isConnected } = useAccount();

    const { mutate } = useMutation({
        mutationFn: makeInvestment,
        onSuccess: (data) => {
            setModal({
                variant: "success",
                title: "Investment Successful",
                message: data?.message || "Payment Verified",
            });
            setAmount("");
            queryClient.invalidateQueries({ queryKey: ["investmentHistory"] });
        },
        onError: (error) => {
            setModal({
                variant: "error",
                title: "Failed",
                message: error?.response?.data?.message || "Error",
            });
        },
    });

    const { writeContract, isPending } = useWriteContract({
        mutation: {
            onSuccess: (txHash) => {
                mutate({ investmentAmount: amount, txHash, walletAddress: address });
            },
            onError: () => {
                setModal({
                    variant: "error",
                    title: "Transaction Failed",
                    message: "Payment failed ❌",
                });
            },
        },
    });

    const handlePayment = () => {
        if (!amount || Number(amount) <= 0) {
            setModal({ variant: "warning", title: "Invalid Amount", message: "Enter valid amount" });
            return;
        }
        if (!isConnected) {
            setModal({ variant: "warning", title: "Connect Wallet", message: "Connect your wallet first" });
            return;
        }
        const payableAmount = isTestMode ? 0.001 : Number(amount);
        writeContract({
            address: USDT_ADDRESS,
            abi: USDT_ABI,
            functionName: "transfer",
            args: [import.meta.env.VITE_PAYMENT_ADDRESS, parseUnits(payableAmount.toString(), 18)],
        });
    };

    const numAmount = parseFloat(amount) || 0;
    const feeEstimate = numAmount > 0 ? (numAmount * 0.001).toFixed(4) : "—";
    const netAmount = numAmount > 0 ? (numAmount - numAmount * 0.001).toFixed(2) : "—";

    return (
        <>
            <div className="w-full max-w-lg mx-auto">

                {/* ── outer glow ring ── */}
                <div className="relative">
                    <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-amber-500/20 via-transparent to-cyan-500/20 pointer-events-none" />

                    <div className="relative bg-[#0a0f1e] border border-slate-800/70 rounded-3xl overflow-hidden">

                        {/* top shimmer bar */}
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

                        {/* header section */}
                        <div className="px-6 pt-6 pb-4 flex items-start justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="h-9 w-9 rounded-md bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                                        <TrendingUp className="h-5 w-5 text-white" />
                                    </div>
                                    <span className=" text-amber-400">
                                        <h1 className="text-xl font-bold text-amber-400 leading-tight tracking-tight">
                                            Invest with USDT
                                        </h1>
                                        <p className="text-xs text-slate-300 mt-1">BSC Network · BEP-20</p>
                                    </span>
                                </div>
                                
                            </div>

                            {/* RainbowKit button */}
                            <div className="flex-shrink-0 mt-1">
                                <ConnectButton
                                    showBalance={false}
                                    label="Connect"
                                    accountStatus="address"
                                />
                            </div>
                        </div>

                        {/* connected wallet badge */}
                        {isConnected && (
                            <div className="mx-6 mb-4 flex items-center gap-2.5 bg-emerald-500/8 border border-emerald-500/20 rounded-xl px-3 py-2.5">
                                <CheckCircle2 className="h-6 w-6 text-emerald-400 flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs text-emerald-400 font-semibold">Wallet connected</p>
                                    <p className="text-[11px] text-slate-400 font-mono truncate">{address}</p>
                                </div>
                            </div>
                        )}

                        {/* divider */}
                        <div className="mx-6 border-t border-slate-600/60" />

                        <div className="px-6 py-5 space-y-4">
                            <div>
                                <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-slate-500 block mb-2">
                                    Investment Amount
                                </label>
                                <div
                                    className={`relative flex items-center bg-slate-900/70 rounded-2xl border transition-all duration-200 ${focused
                                            ? "border-amber-500/50 shadow-[0_0_0_3px_rgba(245,158,11,0.08)]"
                                            : "border-slate-700/50"
                                        }`}
                                >
                                    <div className="pl-4 pr-1 flex items-center gap-2 flex-shrink-0">
                                        <div className="h-7 w-7 rounded-lg bg-amber-500/15 border border-amber-500/25 flex items-center justify-center">
                                            <Coins className="h-3.5 w-3.5 text-amber-400" />
                                        </div>
                                    </div>
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        onFocus={() => setFocused(true)}
                                        onBlur={() => setFocused(false)}
                                        placeholder="0.00"
                                        className="flex-1 bg-transparent px-3 py-4 text-2xl font-bold text-white placeholder:text-slate-700 outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
                                    />
                                    <div className="absolute right-5 flex items-center gap-1.5 flex-shrink-0">
                                        <div className="flex items-center gap-1.5 bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5">
                                            <div className="h-4 w-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-500" />
                                            <span className="text-xs font-bold text-white">USDT</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* quick amounts */}
                            <div className="grid grid-cols-4 gap-2">
                                {QUICK_AMOUNTS.map((q) => (
                                    <button
                                        key={q}
                                        onClick={() => setAmount(q.toString())}
                                        className={`py-2 rounded-xl text-xs font-bold border transition-all duration-150 ${amount === q.toString()
                                                ? "bg-amber-500/15 border-amber-500/40 text-amber-400"
                                                : "bg-slate-900/60 border-slate-800 text-slate-500 hover:border-slate-600 hover:text-slate-300"
                                            }`}
                                    >
                                        ${q.toLocaleString()}
                                    </button>
                                ))}
                            </div>

                            {/* fee breakdown */}
                            {numAmount > 0 && (
                                <div className="bg-slate-900/50 border border-slate-800/60 rounded-xl px-4 py-3 space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-slate-500">Amount</span>
                                        <span className="text-xs font-semibold text-white">${numAmount.toFixed(2)} USDT</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-slate-500">Network fee (~)</span>
                                        <span className="text-xs font-semibold text-slate-400">${feeEstimate} USDT</span>
                                    </div>
                                    <div className="border-t border-slate-800 pt-2 flex justify-between items-center">
                                        <span className="text-xs font-bold text-slate-300">You invest</span>
                                        <span className="text-sm font-bold text-emerald-400">${netAmount} USDT</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* divider */}
                        <div className="mx-6 border-t border-slate-600/60" />
                        <div className="px-6 py-5">
                            <button
                                onClick={handlePayment}
                                disabled={isPending}
                                className="group relative w-full overflow-hidden rounded-2xl py-4 font-bold text-sm tracking-wide transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
                                style={{
                                    background: "linear-gradient(135deg, #d97706, #f59e0b, #fbbf24)",
                                    color: "#0a0f1e",
                                    boxShadow: "0 4px 24px rgba(245,158,11,0.25)",
                                }}
                            >
                                {/* shimmer overlay */}
                                <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                <span className="relative flex items-center justify-center gap-2.5">
                                    {isPending ? (
                                        <>
                                            <span className="h-4 w-4 border-2 border-amber-900/40 border-t-amber-900 rounded-full animate-spin" />
                                            Processing transaction…
                                        </>
                                    ) : (
                                        <>
                                            <Wallet className="h-4 w-4" />
                                            {isConnected ? "Pay with Wallet" : "Connect Wallet"}
                                            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                                        </>
                                    )}
                                </span>
                            </button>

                            <p className="text-center text-[11px] text-slate-600 mt-3">
                                Transactions are irreversible · Powered by BNB Smart Chain
                            </p>
                        </div>

                        {/* bottom shimmer bar */}
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

                    </div>
                </div>
            </div>

            <ResponseModel
                open={modal !== null}
                onClose={() => setModal(null)}
                variant={modal?.variant || "success"}
                title={modal?.title || ""}
                message={modal?.message || ""}
            />
        </>
    );
};

export default UserMakeInvestment;