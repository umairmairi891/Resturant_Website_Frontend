import { useEffect, useState } from 'react'
import Header from './Pages/Header'
import Footer from './Pages/Footer'
import { Outlet } from 'react-router-dom'
import Cart from './Pages/Cart'
import { CartProvider } from './Context/CartContxt'
function App() {
  const [cartOpen, setOpenCart] = useState(false)
  const [cart, setCart] = useState(() => {
    const savedItem = localStorage.getItem('cart')
    return savedItem ? JSON.parse(savedItem) : []
  })

  const addtocart = (product) => {
    setCart(prev => {

      const existing = prev.find((item) => item.id == product.id)

      if (existing) {
        return prev.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      }
      return [...prev, { ...product, quantity: 1 }]
    }
    )
    setOpenCart(true)
  }


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])


  const removefromCart = (id) => {
    setCart(prev => prev.filter((item) => item.id !== id))
  }

  const increaseQuantity = (id) => {
    setCart(prev => prev.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
  }
  const decreaseQuantity = (id) => {
    setCart(prev => prev.map((item) => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item))
  }

  const totalAmount = cart.reduce((acc, val) => acc + val.quantity * val.price, 0)
  const cartCount = cart.reduce((acc, val) => acc + val.quantity, 0)
  

  return (
    <CartProvider value={{ addtocart, removefromCart, increaseQuantity, decreaseQuantity }}>
      <Header
        cartcount={cartCount}
        onopen={() => setOpenCart(true)} />
      <Outlet />
      <Footer />
      <Cart cartopen={cartOpen}
        onclose={() => setOpenCart(false)}
        cart={cart}
        total={totalAmount}
      />

    </CartProvider>
  )
}

export default App
