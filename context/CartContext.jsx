import { createContext, useState, useEffect} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    const [showModal, setShowModal] = useState(false);

    useEffect (() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);


    const addToCart = (product) =>{
             
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
  
            if (existingItem) {
                return prevCart.map((item) => 
                    item.id === product.id ? 
                    {...item, quantity: item.quantity + 1} 
                    : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });

        setShowModal(true);

        setTimeout(() => {
            setShowModal(false);
        }, 2000);
    }
    
    const decProdQuan = (product) => {
       
         setCart((prevCart) => {
            const currentProduct = prevCart.find((item) => item.id === product.id);
  
            if(currentProduct){
                if(currentProduct.quantity === 0){
                    return [...prevCart];
                }else{
                    return prevCart.map((item) => 
                        item.id === product.id ? 
                        {...item, quantity: item.quantity - 1} 
                        : item
                    );
                }
            }
            return ;
        })
    }
    const removeFromCart = (id) => {
        setCart(prev => prev.filter(p => p.id !== id));
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, showModal, decProdQuan }}>
            {children}
        </CartContext.Provider>
    )
}