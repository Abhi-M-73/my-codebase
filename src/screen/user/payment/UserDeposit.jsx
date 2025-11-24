import React, { useState } from "react";
import { Coins } from "lucide-react";
import ReusableForm from "../../../components/ui/ReusableForm";
import ReusableButton from "../../../components/ui/ReusableButton";
import { userDeposit } from "../../../api/user.api";
import WalletOptionModal from "../../../wallet/WalletOptionModal";
import TokenPayment from "../../../wallet/TokenPayment";


const UserDeposit = () => {
  const [amount, setAmount] = useState("");
  const [finalAmount, setFinalAmount] = useState(null);

  const [openWalletModal, setOpenWalletModal] = useState(false);   
  const [openPaymentModal, setOpenPaymentModal] = useState(false); 
  const [selectedWallet, setSelectedWallet] = useState(null);      

  const handleDeposit = () => {
    if (!amount || Number(amount) <= 0) {
      alert("Enter valid amount");
      return;
    }
    setFinalAmount(amount);       
    setOpenWalletModal(true);     
  };

  const handleWalletSelect = (walletId) => {
    setSelectedWallet(walletId);      
    setOpenWalletModal(false);       
    setOpenPaymentModal(true);       
  };

  const handlePaymentSuccess = () => {
    setOpenPaymentModal(false);
    setSelectedWallet(null);
    setAmount("");
    setFinalAmount(null);
  };

  const handlePaymentFailure = () => {
    console.log("Payment failed");
  };

  return (
    <>
      <div className="max-w-xl mx-auto p-4 space-y-6 border border-gray-700 rounded-lg">
        <h1 className="text-3xl font-bold text-center text-[var(--btnColor)]">
          Deposit
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
          label="Deposit Now"
          type="button"
          variant="primary"
          onClick={handleDeposit}
          icon={Coins}
        />
      </div>

      <WalletOptionModal
        isOpen={openWalletModal}
        onClose={() => setOpenWalletModal(false)}
        onSelectWallet={handleWalletSelect}   // yahi se walletId aayega
      />

      {openPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="relative w-full max-w-xl mx-4">
            <TokenPayment
            setOpenPaymentModal={setOpenPaymentModal}
              amount={finalAmount}
              walletType={selectedWallet}
              apiFn={userDeposit}
              apiBasePayload={{}}
              onSuccess={handlePaymentSuccess}
              onFailure={handlePaymentFailure}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default UserDeposit;
