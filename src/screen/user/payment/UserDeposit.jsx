import React, { useState } from "react";
import { Coins } from "lucide-react";
import ReusableForm from "../../../components/ui/ReusableForm";
import ReusableButton from "../../../components/ui/ReusableButton";
import PaymentScreen from "../payment/PaymentScreen";  // <-- IMPORT
import { userDeposit } from "../../../api/user.api";

const UserDeposit = () => {
  const [amount, setAmount] = useState("");
  const [openModal, setOpenModal] = useState(false); 
  const [finalAmount, setFinalAmount] = useState(null);

  const handleDeposit = () => {
    if (!amount || Number(amount) <= 0) {
      alert("Enter valid amount");
      return;
    }

    setFinalAmount(amount);   
    setOpenModal(true);       
  };

  return (
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

      {/* PAYMENT SCREEN */}
      {openModal && (
        <PaymentScreen
          openWalletModalExternally={openModal}
          onCloseExternalModal={() => setOpenModal(false)}
          amount={finalAmount}              
          apiFn={userDeposit}               
          apiBasePayload={{ amount: finalAmount }}
        />
      )}
    </div>
  );
};

export default UserDeposit;
