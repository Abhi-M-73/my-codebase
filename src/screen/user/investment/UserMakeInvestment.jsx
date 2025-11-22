import { useState } from "react";
import { Coins } from "lucide-react";
import ReusableForm from "../../../components/ui/ReusableForm";
import ReusableButton from "../../../components/ui/ReusableButton";
import { makeInvestment } from "../../../api/user.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const UserMakeInvestment = () => {
    const queryClient = useQueryClient();
    const [amount, setAmount] = useState("");

    const { mutate, isPending } = useMutation({
        mutationFn: makeInvestment,
        onSuccess: (data) => {
            toast.success(data?.message || "Investment successful!");
            setAmount("");
            queryClient.invalidateQueries({ queryKey: ["investmentHistory"] });
        },
        onError: (error) => {
            toast.error(
                error?.response?.data?.message || "Investment failed. Please try again."
            );
        },
    });

    const handleDeposit = () => {
        if (!amount || Number(amount) <= 0) {
            alert("Enter valid amount");
            return;
        }
        mutate({ amount });
    };


    return (
        <div className="max-w-xl mx-auto p-4 space-y-6 border border-gray-700 rounded-lg">
            <h1 className="text-3xl font-bold text-center text-[var(--btnColor)]">
                Make Investment
            </h1>

            <ReusableForm
                label="Deposit Amount"
                name="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount to deposit"
                required={true}
                icon={Coins}
            />

            <ReusableButton
                label="Make Investment"
                type="button"
                variant="primary"
                onClick={handleDeposit}
                loading={isPending}
                icon={Coins}
            />
        </div>
    );
};

export default UserMakeInvestment;
