import { useState } from "react";
import { buyPlanPackage } from "../../../api/user.api";
import WalletOptionModal from "../../../wallet/WalletOptionModal";
import TokenPayment from "../../../wallet/TokenPayment";

const PaymentScreen = () => {
    const [showWalletModal, setShowWalletModal] = useState(false);
    const [walletType, setWalletType] = useState(null);

    const amount = "0.0001";
    const packageId = "123456";
    const userId = "abc-user-id";

    const handlePaymentSuccess = () => {
        console.log("✅ Payment + API success");
    };

    const handlePaymentFailure = () => {
        console.log("❌ Payment / API failed");
    };

    return (
        <>
            {/* Wallet choose karne ka button */}
            <div className="mb-4 flex justify-center">
                <button
                    onClick={() => setShowWalletModal(true)}
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold"
                >
                    {walletType ? `Wallet: ${walletType}` : "Choose Wallet"}
                </button>
            </div>

            {/* Modal */}
            <WalletOptionModal
                isOpen={showWalletModal}
                onClose={() => setShowWalletModal(false)}
                onSelectWallet={(walletId) => {
                    setWalletType(walletId); // 👈 yahi value TokenPayment ko jayegi
                }}
            // wallets={CUSTOM_LIST} // optional: agar custom list bhejni ho
            />

            <TokenPayment
                amount={amount}
                walletType={walletType}
                apiFn={buyPlanPackage}
                apiBasePayload={{
                    packageId,
                    userId,
                }}
                onSuccess={handlePaymentSuccess}
                onFailure={handlePaymentFailure}
            />
        </>
    );
};

export default PaymentScreen;
