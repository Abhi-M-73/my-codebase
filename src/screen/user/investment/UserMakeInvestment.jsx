import { useState } from "react";
import { Coins, Wallet } from "lucide-react";
import ReusableForm from "../../../components/ui/ReusableForm";
import ReusableButton from "../../../components/ui/ReusableButton";
import { makeInvestment } from "../../../api/user.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ResponseModel from "../../../components/ui/ResponseModel";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useWriteContract } from "wagmi";
import { parseUnits } from "viem";

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

const UserMakeInvestment = () => {
    const queryClient = useQueryClient();
    const [amount, setAmount] = useState("");
    const [modal, setModal] = useState(null);
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
                mutate({
                    investmentAmount: amount,
                    txHash,
                    walletAddress: address,
                });
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
            setModal({
                variant: "warning",
                title: "Invalid Amount",
                message: "Enter valid amount",
            });
            return;
        }

        if (!isConnected) {
            setModal({
                variant: "warning",
                title: "Connect Wallet",
                message: "Connect your wallet first",
            });
            return;
        }

        writeContract({
            address: USDT_ADDRESS,
            abi: USDT_ABI,
            functionName: "transfer",
            args: [
                import.meta.env.VITE_PAYMENT_ADDRESS,
                parseUnits(amount.toString(), 18),
            ],
        });
    };

    return (
        <>
            <div className="w-full max-w-xl mx-auto border border-slate-700 rounded-xl p-6 space-y-6">

                {/* Wallet Connect */}
                <div className="flex justify-end">
                    <ConnectButton showBalance label="Connect " accountStatus="address" />
                </div>

                <h1 className="text-2xl font-bold text-white">
                    Invest with Crypto
                </h1>

                <ReusableForm
                    label="Amount (USDT)"
                    name="amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    icon={Coins}
                />

                {/* Wallet Info */}
                {isConnected && (
                    <p className="text-sm text-green-400">
                        Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
                    </p>
                )}

                {/* Pay Button */}
                <ReusableButton
                    label={isConnected ? "Pay with Wallet" : "Connect Wallet"}
                    onClick={handlePayment}
                    loading={isPending}
                    icon={Wallet}
                />
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