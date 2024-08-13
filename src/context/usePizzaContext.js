import { useContext } from "react";
import { PizzaContext } from "./PizzaContext"; 

export const usePizzaContext = () => useContext(PizzaContext);
