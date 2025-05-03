

import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Maincontext } from './Componenet/Context'


export default function List() {
    const [product, Setproduct] = useState([])
    const [categories, Setcategories] = useState([])
    const { category_slug } = useParams();
    const [loading, Setloading] = useState(true);
    const [totalpage, Settotalpage] = useState(0)
    const [currentpage, Setcurrentpage] = useState(0)
    const { addtocart } = useContext(Maincontext);

    const limit = 10;







    const getcategory = () => {
        axios.get("https://dummyjson.com/products/categories").then(
            (res) => {
                Setcategories(res.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }

    useEffect(
        () => {

            getcategory()

        },
        []
    )


    useEffect(
        () => {





            let API;

            if (category_slug == null) {
                API = "https://dummyjson.com/products"
            }
            else {
                API = `https://dummyjson.com/products/category/${category_slug}`
            }

            Setloading(true)
            axios.get(API).then(
                (res) => {
                    Setproduct(res.data.products)
                    Settotalpage(Math.ceil(res.data.total / limit))

                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            ).finally(
                () => {
                    Setloading(false)
                }
            )


        }, [category_slug]
    )


    useEffect(
        () => {
            Setloading(true)
            axios.get(`https://dummyjson.com/products?skip=${currentpage * limit}`).then(
                (res) => {
                    Setproduct(res.data.products)


                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            ).finally(
                () => {
                    Setloading(false)
                }
            )
        }, [currentpage]
    )


    let paginaction = [];
    for (let i = 0; i < totalpage; i++) {
        paginaction.push(
            
            <li className='iteam-center   justify-center w-[100%]' onClick={() => Setcurrentpage(i)}>
              


                <div className='p-1 w-[20.5px]   text-amber-500 leading-tight m-auto bg-white border hover:text-gray-700  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700'>
                    {
                        i + 1
                    }
                </div>

            </li>
        )

    }


    return (
        <>

          <div className=' grid grid-cols-6 bg-[white] md:grid-cols-5 ' >
         
            
               <div className='mt-[78px]  md:col-span-1 ms-[30px]   col-span-2 xl:col-span-1'>

              
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-3.5 ms-[15px]">
                        Categeory
                    </h2>
                    <Link to={"/"}>
                        <button className='mt-3.5 m-1.5  bg-gray-300 border-b-black w-[90%] md:w-[150px] h-[40px] cursor-pointer'>
                            All
                        </button>
                    </Link>

                    {categories.map((cate, index) => (
                        <Link key={index} to={`/${cate.slug}`}>
                            <button
                                className={`${category_slug === cate.slug ? "bg-amber-800" : "bg-gray-300"
                                    } mt-3.5 m-1.5 w-[90%] md:w-[150px] h-[40px] cursor-pointer items-center`}
                            >
                                {cate.name}
                            </button>
                        </Link>
                    ))}
                </div>

              
            
<div className=' col-span-4   flex flex-wrap ms-[30px] me-[15px] mt-[116px] gap-3 md:col-span-4 md:ms-3.5 '>
                    {loading ? (
                        [1, 2, 3, 4, 5, 6].map((d, i) => (
                            <div key={i} className="w-[300px]  h-[400px] bg-gray-200  animate-pulse"></div>
                        ))
                    ) : (
                        product.map((item, index) => (
                            <>
                            
                              <div key={index} className=" group hover:scale-[1.1] hover:shadow-xl  md:ms-[50px] ms-[10px] cursor-pointer    w-[260px] h-[450px] relative col-span-3 mt-[26px]">
                                <img className="aspect-square w-full rounded-md bg-gray-200 w-[100%]  object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                    src={item.thumbnail}
                                    alt={item.title}
                                    
                                />
                                <div className="mt-4 flex justify-between">
                                    <div className='ms-1'>
                                        <h3 className="text-sm text-gray-700">
                                          
                                                {item.title}
    
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-800">{item.category}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">${item.price}</p>
                                </div>
                                <div className="mt-4 flex space-x-2 justify-center">
                                    
                                    <Link to={`/details/${item.id}`} className="focus:outline-none text-white bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5">
                                        View
                                    </Link>
                                    <button
                                        onClick={() => addtocart(item.id)}
                                        className="focus:outline-none text-white cursor-pointer xl:bg-amber-500 bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5"
                                    >
                                        Add To Cart
                                    </button>
                                </div>

                            </div>

                            
                            </>
                          


                        ))
                    )}
                </div>

                {/* Pagination Section  */}
                 {/* <div className= " mt-6  h-[100px] ms-[60%] sm:ms-[10%] ">
                  
                </div> */}
                
               

            </div>
 <div className='bg-[blue] md:bg-[green] h-[50px] mt-6 '>
  <nav aria-label="Page navigation" className="block  ">
                        <ul className="inline-flex  -space-x-px text-sm">{paginaction}</ul>
                    </nav>

 </div>

        </>


    )

} 