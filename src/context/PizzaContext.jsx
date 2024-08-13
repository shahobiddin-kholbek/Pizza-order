import { createContext, useContext, useState } from "react"
import PropTypes from "prop-types"

const PizzaContext = createContext()

export const PizzaProvider = ({ children }) => {
    const [ingretientsInCart, setIngredientsInCart] = useState([])

    return (
        <PizzaContext.Provider value={{
            ingretientsInCart,
            setIngredientsInCart
        }}>
            {children}
        </PizzaContext.Provider>
    )
}

PizzaProvider.propTypes = {
    children: PropTypes.node
}
// eslint-disable-next-line react-refresh/only-export-components
export const usePizzaContext = () => useContext(PizzaContext)
