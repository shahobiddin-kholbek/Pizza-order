import PropTypes from "prop-types";
import DoneIcon from "../ui/icons/DoneIcon";
export default function IngredientesCP({
  ingredient,
  pizzaSizeTab,
  ingretientsInCart = [],
}) {
  const pizzaSizePrice =
    pizzaSizeTab === "Большая"
      ? ingredient?.prices.lg
      : pizzaSizeTab === "Средная"
      ? ingredient?.prices.md
      : ingredient?.prices.sm;

  if (!ingredient) {
    return null;
  }
  return (
    <button
      onClick={() => console.log(ingredient)}
      className={`${ingretientsInCart.includes(ingredient) ? 'border border-[#FF6900]' : 'border'} relative ingredient flex flex-col items-center py-2 rounded-xl`}
    >
      <img src={ingredient.img} className="w-[87.98px] text-center" alt="" />
      <h1 className="text-xs text-center mt-1 h-8 line-clamp-2">
        {ingredient.name}
      </h1>
      <p className="text-center mt-1 font-medium">
        {pizzaSizePrice.toFixed(2)} c
      </p>
      <div
        className={`${
          ingretientsInCart.includes(ingredient) ? "block" : "hidden"
        } absolute top-1 right-1`}
      >
        <DoneIcon />
      </div>
    </button>
  );
}

IngredientesCP.propTypes = {
  ingredient: PropTypes.object,
  pizzaSizeTab: PropTypes.string,
  ingretientsInCart: PropTypes.array,
};
