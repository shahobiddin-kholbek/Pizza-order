import { useState } from "react";
import { pizzaes } from "../../Dataes/pizzaes";
import ModalPizza from "../ModalPizza/ModalPizza";

export default function HomeCP() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pizzaToModal, setPizzaToModal] = useState({});

  const onPizzaClick = (id) => {
    const pizza = pizzaes.find((pizza) => pizza.id === id);

    setPizzaToModal(pizza);
    setIsModalOpen(true);
  };
  return (
    <div className="max-w-[1040px] min-h-screen mx-auto">
      <ul className="pt-[5%] h-full grid grid-cols-4 gap-[5%]">
        {pizzaes.map((pizza) => (
          <li
            onClick={() => onPizzaClick(pizza.id)}
            key={pizza.id}
            className="cursor-pointer h-full flex flex-col gap-[5%]"
          >
            <div className="">
              <img
                className="transition-transform hover:translate-y-[2px]"
                src={pizza.imgs?.traditional.md}
                alt={pizza.name}
              />
              <h1 className="my-[8px] text-[20px] leading-[24px] font-medium font-serif">
                {pizza.name}
              </h1>
              <p className="text-[14px] leading-[20px] text-[#7D7D7D]">
                {pizza.description}
              </p>
            </div>

            <div className="mt-[16px] flex items-center justify-between">
              <div className="pr-[4px] font-semibold">
                от {pizza.prices.sm?.toFixed(2)} с
              </div>
              <button className="bg-[#FFF0e6] hover:bg-[#e9bb9d] transition-all text-base font-medium rounded-[9999px] text-[#D15700] py-[8px] px-[20px]">
                Выбрать
              </button>
            </div>
          </li>
        ))}
      </ul>

      <ModalPizza
        isOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        data={pizzaToModal}
      />
    </div>
  );
}
