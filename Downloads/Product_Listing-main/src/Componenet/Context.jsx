// import axios from 'axios';

// import React, { createContext, useEffect, useState } from 'react'


// const Maincontext = createContext()
// export default function Context(props) {
//   const [product, Setproduct] = useState([])
//   const [cart, Setcart] = useState([])
//   const [user, Setuser] = useState()

//   useEffect(
//     () => {
//       const usera = localStorage.getItem("user");
//       if (usera != null) {
//         Setuser(JSON.parse(usera))
//       }

//     }, []
//   )

//   function userhandler(data) {
//     Setuser(data)
//     localStorage.setItem("user", JSON.stringify(data))
//   }
//   function logoout() {
//     Setuser(null);
//     localStorage.removeItem("user")
//   }

//   // const userlocal = localStorage.getItem("user");
//   // console.log(userlocal)

//   useEffect(
//     () => {
//       axios.get("https://dummyjson.com/products").then(
//         (res) => {
//           Setproduct(res.data.products)


//         }
//       ).catch(
//         (error) => {
//           console.log(error)
//         }
//       )

//     }, []
//   )


//   function addtocart(id) {

//     const exitproduct = product.find(
//       (item) => {
//         return item.id == id
//       }
//     )

//     if (exitproduct) {
//       const cartproduct = cart.find(
//         (cd) => {
//           return cd.id == id
//         }
//       )

//       if (cartproduct) {
//         const updateproduct = cart.map(
//           (prod) => {
//             return prod.id == id ? { ...prod, qty: prod.qty + 1 } : prod
//           }
//         )
//         Setcart(updateproduct)

//         localStorage.setItem("cart", JSON.stringify(updateproduct))
//       } else {
//         const print = Setcart([...cart, { ...exitproduct, qty: 1 }])
//         localStorage.setItem("cart", JSON.stringify(print));
//       }
//     }
//   }
//   useEffect(
//     () => {
//       const hello = JSON.parse(localStorage.getItem("cart"));

//       Setcart(hello)

//     }, []
//   )






//   function qtyHandler(id, flag) {
//     let updateproduct;
//     const exitproduct = product.find(
//       (item) => {
//         return item.id == id



//       }
//     )
//     if (flag == 0) {
//       if (exitproduct) {
//         updateproduct = cart.map(
//           (prod) => {
//             if (prod.qty > 1)
//               return prod.id == id ? { ...prod, qty: prod.qty - 1 } : prod
//           }
//         )

//       }
//     }
//     else {
//       updateproduct = cart.map(
//         (prod) => {
//           return prod.id == id ? { ...prod, qty: prod.qty + 1 } : prod
//         }
//       )
//     }
//     Setcart(updateproduct)

//   }



//   return (
//     <Maincontext.Provider value={{ user, userhandler, logoout, addtocart, cart, qtyHandler }}>
//       {props.children}
//     </Maincontext.Provider>
//   )
// }

// export { Maincontext };

import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

const Maincontext = createContext();

export default function Context(props) {
  const [product, Setproduct] = useState([]);
  const [cart, Setcart] = useState([]);
  const [user, Setuser] = useState();

  useEffect(() => {
    const usera = localStorage.getItem("user");
    if (usera != null) {
      Setuser(JSON.parse(usera));
    }
  }, []);

  function userhandler(data) {
    Setuser(data);
    localStorage.setItem("user", JSON.stringify(data));
  }

  function logoout() {
    Setuser(null);
    localStorage.removeItem("user");
  }

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        Setproduct(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function addtocart(id) {
    const exitproduct = product.find((item) => item.id == id);

    if (exitproduct) {
      const cartproduct = cart.find((cd) => cd.id == id);

      if (cartproduct) {
        const updateproduct = cart.map((prod) =>
          prod.id == id ? { ...prod, qty: prod.qty + 1 } : prod
        );
        Setcart(updateproduct);
        localStorage.setItem("cart", JSON.stringify(updateproduct));
      } else {
        const newCart = [...cart, { ...exitproduct, qty: 1 }];
        Setcart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
      }
    }
  }

  useEffect(() => {
    const hello = JSON.parse(localStorage.getItem("cart"));
    if (hello) {
      Setcart(hello);
    }
  }, []);

  function qtyHandler(id, flag) {
    let updatedCart;
    const exitproduct = product.find((item) => item.id == id);

    if (flag === 0) {
      if (exitproduct) {
        updatedCart = cart.map((prod) =>
            prod.id == id && prod.qty > 1
              ? { ...prod, qty: prod.qty - 1 }
              : prod
          )
          .filter((prod) => prod.qty > 0); // Remove product if qty is 0
      }
    } else {
      updatedCart = cart.map((prod) =>
        prod.id == id ? { ...prod, qty: prod.qty + 1 } : prod
      );
    }

    Setcart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  function removeFromCart(id) {
    const updatedCart = cart.filter((prod) => prod.id !== id);
    Setcart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  return (
    <Maincontext.Provider
      value={{ user, userhandler, logoout, addtocart, cart, qtyHandler,removeFromCart }}
    >
      {props.children}
    </Maincontext.Provider>
  );
}

export { Maincontext };
