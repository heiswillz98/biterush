import React, { useEffect, useState } from "react";
import MenuItem from "../components/MenuItems/MenuItems";
import { StaticImageData } from "next/image";
import { H4, H6 } from "@/components/Shared/heading/Heading";
import Input from "@/components/Shared/Inputs/Input";
import Dropdown from "@/components/Shared/dropdown/Dropdown";
import Button from "@/components/Shared/button/Button";
import { FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/router";

interface MenuItemData {
  imagePath: StaticImageData;
  itemName: string;
  price: number;
  id: number;
}

interface Pack {
  id: number;
  counters: Record<number, number>;
}

const ShowCart: React.FC = () => {
  const router = useRouter();
  const [cartData, setCartData] = useState<{
    packs: Pack[];
    items: MenuItemData[];
  }>({ packs: [], items: [] });
  const [updatedPacks, setUpdatedPacks] = useState<Pack[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [deliveryCost, setDeliveryCost] = useState<number>(0); // Added state for delivery cost
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [deliveryAddress, setDeliveryAddress] = useState<string>("");

  const options = [
    { label: "Futa - ₦1000", value: "futa", cost: 1000 },
    { label: "Funaab - ₦300", value: "funaab", cost: 300 },
    { label: "Eksu - ₦200", value: "eksu", cost: 200 },
    { label: "OAU - ₦300", value: "oau", cost: 300 },
    { label: "Unilag - ₦700", value: "unilag", cost: 700 },
  ];

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = options.find((option) => option.value === e.target.value);
    setSelectedOption(e.target.value);
    setDeliveryCost(selected ? selected.cost : 0);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleDeliveryAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDeliveryAddress(e.target.value);
  };

  useEffect(() => {
    const data = sessionStorage.getItem("checkoutData");
    if (data) {
      const parsedData = JSON.parse(data);
      setCartData(parsedData);
      setUpdatedPacks(parsedData.packs);
      sessionStorage.removeItem("checkoutData");
    }
  }, [router]);

  const handleIncrement = (packId: number, itemId: number) => {
    setUpdatedPacks((prevPacks) =>
      prevPacks.map((pack) =>
        pack.id === packId
          ? {
              ...pack,
              counters: {
                ...pack.counters,
                [itemId]: (pack.counters[itemId] || 0) + 1,
              },
            }
          : pack
      )
    );
  };

  const handleDecrement = (packId: number, itemId: number) => {
    setUpdatedPacks((prevPacks) =>
      prevPacks.map((pack) =>
        pack.id === packId
          ? {
              ...pack,
              counters: {
                ...pack.counters,
                [itemId]: Math.max((pack.counters[itemId] || 0) - 1, 0),
              },
            }
          : pack
      )
    );
  };

  const formatMessage = () => {
    const packsDetails = updatedPacks
      .map((pack) => {
        const itemsDetails = items
          .filter((item) => pack.counters[item.id] > 0)
          .map(
            (item) =>
              `Item: ${item.itemName}, Quantity: ${pack.counters[item.id]}`
          )
          .join("\n");
        return `Pack ${pack.id}:\n${itemsDetails}`;
      })
      .join("\n\n");

    return `
      Cart Details:
      ${packsDetails}

      Delivery Details:
      Name: ${name}
      Phone Number: ${phoneNumber}
      Location: ${selectedOption}
      Address: ${deliveryAddress}

      Total Price: ₦${getGrandTotalPrice().toLocaleString()}
    `;
  };

  const handleWhatsAppClick = () => {
    const message = formatMessage();
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "+23407045954141"; // Replace with the WhatsApp number you want to send the message to
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  if (!cartData.packs.length) {
    return <p>Loading...</p>;
  }

  const { packs, items } = cartData;

  const getTotalPrice = (pack: Pack) => {
    return Object.entries(pack.counters).reduce((total, [itemId, quantity]) => {
      const item = items.find((item) => item.id === Number(itemId));
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };

  const getGrandTotalPrice = () => {
    const subtotal = updatedPacks.reduce(
      (total, pack) => total + getTotalPrice(pack),
      0
    );
    return subtotal + deliveryCost;
  };

  return (
    <section>
      <div className="w-11/12 mx-auto border border-dotted border-gray-950 mt-10">
        <div>
          <h1>Cart</h1>
          {updatedPacks.map((pack) => (
            <div key={pack.id}>
              <h3>Pack {pack.id}</h3>
              {items.map(
                (item) =>
                  pack.counters[item.id] > 0 && (
                    <div key={item.id}>
                      <MenuItem
                        imagePath={item.imagePath}
                        itemName={item.itemName}
                        price={item.price}
                        onIncrement={() => handleIncrement(pack.id, item.id)}
                        onDecrement={() => handleDecrement(pack.id, item.id)}
                        count={pack.counters[item.id] || 0}
                      />
                    </div>
                  )
              )}
              <p>
                Total Price for Pack {pack.id}: ₦
                {getTotalPrice(pack).toLocaleString()}
              </p>
            </div>
          ))}
          <h2 className="mt-4">
            Grand Total Price: ₦{getGrandTotalPrice().toLocaleString()}
          </h2>
        </div>
        <div className="flex flex-col gap-4 my-4">
          <H4>Delivery details</H4>
          <Input
            labelColor="black"
            label="Name"
            value={name}
            onChange={handleNameChange}
          />
          <Input
            labelColor="black"
            label="Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          <Dropdown
            label="Enter Location"
            options={options}
            dropdownValue={selectedOption}
            onChange={handleDropdownChange}
            className=""
          />
          <Input
            labelColor="black"
            label="Delivery Address"
            value={deliveryAddress}
            onChange={handleDeliveryAddressChange}
          />
        </div>
        <div>
          <H6>Subtotal : ₦{getGrandTotalPrice().toLocaleString()} </H6>
          <H6>Delivery : ₦{deliveryCost.toLocaleString()} </H6>
          <H6>Pack Fee : ₦0 </H6>
          <H6>Charges : ₦0 </H6>
          <H6>Grand Total : ₦{getGrandTotalPrice().toLocaleString()} </H6>
        </div>
      </div>
      <div>
        <Button
          className="bg-green-400 flex flex-row px-2 py-2 gap-3 rounded-md text-white items-center"
          onClick={handleWhatsAppClick}
        >
          <FaWhatsapp /> Proceed to WhatsApp
        </Button>
        <Button className="bg-red-400 flex flex-row px-2 py-2 gap-3 rounded-md text-white items-center">
          Cancel Order
        </Button>
      </div>
    </section>
  );
};

export default ShowCart;
