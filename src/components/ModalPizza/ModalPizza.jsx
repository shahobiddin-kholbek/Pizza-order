import PropTypes from "prop-types";
import CloseIcon from "../ui/icons/CloseIcon";
import { useEffect, useState } from "react";
import { Segmented } from "antd";
import "./modal_pizza.css";
import IngredientesCP from "../IngredientesCP/IngredientesCP";
import { usePizzaContext } from "../../context/PizzaContext";
import { Link } from "react-router-dom";
export default function ModalPizza({ isOpen, data, setIsModalOpen }) {
  const {
    name,
    filling_dough,
    mandatory_filling_dough,
    imgs,
    prices,
    diameters,
    weights,
    pizzaSizes = [],
    pizzaTypes = [],
    ingredientes = [],
  } = data;
  const { ingretientsInCart, setIngredientsInCart } = usePizzaContext();
  const [diametr, setDiametr] = useState(diameters?.sm);
  const [price, setPrice] = useState(prices?.md);
  const [weightOfTesto, setWeightOfTesto] = useState("");
  const [pizzaSizeTab, setPizzaSizeTab] = useState("");
  const [pizzaTypeTab, setPizzaTypeTab] = useState("традиционное");
  const [pizzaImg, setPizzaImg] = useState("");
  const [selectedWords, setSelectedWords] = useState([]);
  const [newFillingDough, setNewFillingDough] = useState(
    filling_dough + ", " + mandatory_filling_dough
  );
  // console.log(imgs['thin']);
  const type = pizzaTypeTab === "традиционное" ? "traditional" : "thin";
  const size =
    pizzaSizeTab === "Маленькая"
      ? "sm"
      : pizzaSizeTab === "Средная"
      ? "md"
      : "lg";
  useEffect(() => {
    if (pizzaTypeTab && pizzaSizeTab && imgs) {
      const img = imgs[type][size];
      setPizzaImg(img);
    }
  }, [pizzaTypeTab, pizzaSizeTab, imgs, type, size]);

  useEffect(() => {
    if (pizzaTypeTab && pizzaSizeTab && weights) {
      const weight = weights[type][size];
      setWeightOfTesto(weight);
    }
  }, [pizzaTypeTab, pizzaSizeTab, weights, type, size]);

  useEffect(() => {
    if (isOpen) {
      const defaultSize = pizzaSizes.includes("Средная")
        ? "Средная"
        : pizzaSizes[0];
      setPizzaSizeTab(defaultSize);
    }
  }, [isOpen, pizzaSizes]);

  useEffect(() => {
    const currentDiametr =
      pizzaSizeTab === "Большая"
        ? diameters?.lg
        : pizzaSizeTab === "Средная"
        ? diameters?.md
        : diameters?.sm;
    setDiametr(currentDiametr);
    const currentPrice =
      pizzaSizeTab === "Большая"
        ? prices?.lg
        : pizzaSizeTab === "Средная"
        ? prices?.md
        : prices?.sm;
    setPrice(currentPrice);

    // const currentWeight = weight[type][size];
    // setWeightOfTesto(currentWeight);
  }, [
    diameters?.lg,
    diameters?.md,
    diameters?.sm,
    pizzaSizeTab,
    prices?.lg,
    prices?.md,
    prices?.sm,
    size,
    type,
  ]);
  const handleWordClick = (word) => {
    setSelectedWords((prev) => {
      const isSelected = prev.includes(word);
      const updatedWords = isSelected
        ? prev.filter((w) => w !== word)
        : [...prev, word];

      // Формируем новую строку с неперечёркнутыми словами
      const remainingWords = filling_dough
        .split(", ")
        .filter((w) => !updatedWords.includes(w))
        .join(", ");

      setNewFillingDough(`${remainingWords}, ${mandatory_filling_dough}`);
      return updatedWords;
    });
  };

  // console.log('newFillingDough:', newFillingDough);

  const pizzaSizeChange = (value) => {
    setPizzaSizeTab(value);
    if (value === "Маленькая") {
      setPizzaTypeTab("традиционное");
    }
  };
  const onModalClose = () => {
    setIsModalOpen(false);
    setPizzaSizeTab("");
    setIngredientsInCart([]);
    setNewFillingDough("");
  };

  const addDeleteIngredient = (ingredient) => {
    if (ingretientsInCart.includes(ingredient)) {
      setIngredientsInCart(ingretientsInCart.filter((i) => i !== ingredient));
    } else {
      setIngredientsInCart([...ingretientsInCart, ingredient]);
    }
  };

  // console.log("ingretientsInCart", ingretientsInCart);

  if (!isOpen) return null;

  return (
    <div className="fixed overflow-hidden top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute flex rounded-[20px] z-20 bg-white py-5 pr-1 h-[610px] max-w-[924px] w-full">
        <div className="relative max-w-[502px]  w-full flex items-center justify-center">
          <img
            src={pizzaImg}
            alt=""
            className={`${
              pizzaSizeTab === "Большая"
                ? "w-[584px] mt-[5%] ml-[5%]"
                : pizzaSizeTab === "Средная"
                ? "w-[404px] mt-[2%] ml-[4.5%]"
                : "w-[332px] mt-[1%] ml-[4%]"
            }`}
          />
          <div
            className={`w-[440px] mt-[12%] h-[440px] rounded-full z-[-1] absolute top-0 border-2 border-dashed ${
              (pizzaSizeTab === "Большая" || !pizzaSizes.includes("Большая")) &&
              "hidden"
            }`}
          ></div>
          <div
            className={`w-[380px] mt-[18.5%] h-[380px] rounded-full z-[-1] absolute top-0 border-2 border-dashed ${
              (pizzaSizeTab === "Средная" || !pizzaSizes.includes("Средная")) &&
              "hidden"
            }`}
          ></div>
        </div>
        <div className="bg-[#FCFCFC] pl-[30px]">
          <div className="h-[478px] overflow-y-auto">
            <h1 className="text-[24px] leading-[28px] font-medium">{name}</h1>
            <div className="flex gap-1 text-[14px] py-1 leading-5 text-[#5C6370]">
              <p>{diametr} см,</p>
              <p>
                {pizzaTypeTab === "традиционное"
                  ? "традиционное тесто"
                  : "тонкое тесто"}
                ,
              </p>
              {weightOfTesto && <p>{weightOfTesto} г</p>}
            </div>
            <p className="text-[14px] leading-[20px] text-[#7D7D7D] font-serif pr-[15%] w-full">
              {filling_dough.split(", ").map((word, index) => (
                <span
                  key={index}
                  className={`underline  cursor-pointer ${
                    selectedWords.includes(word)
                      ? "line-through"
                      : "decoration-dashed"
                  }`}
                  onClick={() => handleWordClick(word)}
                >
                  {word}
                  {index < filling_dough.split(", ").length - 1 && ", "}
                </span>
              ))}
              {` ${mandatory_filling_dough}`}
            </p>
            <div className="flex flex-col gap-3 items-center  justify-between my-2 pr-[30px]">
              <Segmented
                size="middle"
                style={{ width: "100%" }}
                options={pizzaSizes}
                value={pizzaSizeTab}
                onChange={pizzaSizeChange}
              />
              <Segmented
                style={{ width: "100%" }}
                size="middle"
                options={pizzaTypes.map((type) => ({
                  ...type,
                  disabled:
                    pizzaSizeTab === "Маленькая" && type.value === "тонкое",
                }))}
                value={pizzaTypeTab}
                onChange={setPizzaTypeTab}
              />
              <div className="w-full">
                <h1 className="text-[24px] mb-3 mt-2 leading-[28px] font-medium">
                  Добавить по вкусу
                </h1>
                <div className="grid grid-cols-3 bg-[#F5F5F5] pl-1 rounded-t-[9999px]">
                  {ingredientes.length > 0 &&
                    ingredientes.map((ingredient) => (
                      <div
                        className=""
                        key={ingredient.id}
                        onClick={() => addDeleteIngredient(ingredient)}
                      >
                        <IngredientesCP
                          ingredient={ingredient}
                          pizzaSizeTab={pizzaSizeTab}
                          ingretientsInCart={ingretientsInCart}
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <Link to={"/map"}>
            <button className="w-full py-3 bg-[#FF6900] text-white rounded-[9999px] mt-8">
              В корзину за {price?.toFixed(2)} с
            </button>
          </Link>
        </div>
        <span
          className="absolute  cursor-pointer right-[-40px] top-3 z-30 hover:scale-110 transition-[0.5s]"
          onClick={onModalClose}
        >
          <CloseIcon />
        </span>
      </div>
      <div
        onClick={onModalClose}
        className="fixed top-0 left-0 w-full h-full bg-[#000000] opacity-70 z-10"
      ></div>
    </div>
  );
}

ModalPizza.propTypes = {
  isOpen: PropTypes.bool,
  setIsModalOpen: PropTypes.func,
  data: PropTypes.object,
};
