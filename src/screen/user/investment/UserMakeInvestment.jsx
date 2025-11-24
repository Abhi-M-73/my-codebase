import { useState } from "react";
import { Coins } from "lucide-react";
import ReusableForm from "../../../components/ui/ReusableForm";
import ReusableButton from "../../../components/ui/ReusableButton";
import { makeInvestment } from "../../../api/user.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import ResponseModel from "../../../components/ui/ResponseModel";

const UserMakeInvestment = () => {
    const queryClient = useQueryClient();
    const [amount, setAmount] = useState("");
    const [modal, setModal] = useState(null);

    const { mutate, isPending } = useMutation({
        mutationFn: makeInvestment,
        onSuccess: (data) => {
            setModal({
                variant: "success",
                title: "Investment Successful",
                message: data?.message || "Your investment was successful.",
            });
            setAmount("");
            queryClient.invalidateQueries({ queryKey: ["investmentHistory"] });
        },
        onError: (error) => {
            setModal({
                variant: "error",
                title: "Investment Failed",
                message: error?.response?.data?.message || "An error occurred while making the investment.",
            });
        },
    });

    const handleDeposit = () => {
        if (!amount || Number(amount) <= 0) {
            setModal({
                variant: "warning",
                title: "Invalid Amount",
                message: "Please enter a valid amount to invest.",
            });
            return;
        }
        mutate({ amount });
    };

    const handleCloseModal = () => {
        setModalConfig((prev) => ({ ...prev, open: false }));
    };

    return (
        <>
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

            <ResponseModel
                open={modal !== null}
                onClose={() => setModal(null)}
                variant={modal?.variant || "success"}
                title={modal?.title || "Investment Status"}
                message={modal?.message || ""}
                confirmLabel="Ok!"
            />
        </>
    );
};

export default UserMakeInvestment;
