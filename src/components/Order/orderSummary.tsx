import React from "react";
import { FaWhatsapp } from "react-icons/fa";

interface Props {
  getGrandTotalPrice: () => number;
  deliveryCost: number;
  handleWhatsAppClick: () => void;
}

const OrderSummary: React.FC<Props> = ({
  getGrandTotalPrice,
  deliveryCost,
  handleWhatsAppClick,
}) => {
  return (
    <div className="bg-[#0C513F] rounded-lg text-white py-4 px-3">
      <h6>Subtotal : ₦{getGrandTotalPrice().toLocaleString()} </h6>
      <h6>Delivery : ₦{deliveryCost.toLocaleString()} </h6>
      <h6>Pack Fee : ₦0 </h6>
      <h6>Charges : ₦0 </h6>
      <h6>Grand Total : ₦{getGrandTotalPrice().toLocaleString()} </h6>
      <div className="flex flex-row gap-3">
        <button
          className="bg-green-400 flex flex-row px-2 py-2 gap-3 rounded-md text-white items-center"
          onClick={handleWhatsAppClick}
        >
          <FaWhatsapp /> Proceed to WhatsApp
        </button>
        <button className="bg-red-400 flex flex-row px-2 py-2 gap-3 rounded-md text-white items-center">
          Cancel Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
