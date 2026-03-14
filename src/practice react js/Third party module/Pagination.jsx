//Pagination in react js => Pagination means showing data in pages instead of loading everything at once.
// eg -> we can see it on the google , in the footer section where you will see the numbers like 1,2, 3 ... 10;
// it means we distribute the all pages of website in the certain pages.

import { useEffect, useState } from "react";


function Pagination(){
    const [products , setProducts] = useState([]);
    const [page, setPage] = useState(2);
    const fetchProducts = async () =>{
        const url = "https://dummyjson.com/products?limit=100";
        let response = await fetch(url);
        const data = await response.json();
        console.log(data);   
          
        if(data && data.products){
         setProducts(data.products);
        }
    }
    console.log(products);
    useEffect(()=>{
        fetchProducts();
    },[]);

    const selectPageHander = (selectedPage) =>{
        if(selectedPage >= 1 && selectedPage <= products.length/10 && selectedPage !== page)
          setPage(selectedPage);
    }
    return(
        <div className="p-5">
            {
                products.length && (<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 ">
                     {
                        products.slice(page*10-10 , page*10).map((prod , index)=>{
                            return <span key={index} className="rounded-xl border-5 border-gray-400 hover:border-gray-600 bg-gray-200
                             p-3 font-semibold text-center cursor-pointer" >
                                <img src={prod.thumbnail} alt={prod.title} />
                                <span className="text-center">{prod.title}</span>
                            </span>
                        })
                     }
                </div>)
            }
            {
                products.length>0 && <div className="justify-self-center mt-10 text-[20px] cursor-pointer"> 
                       <span onClick={()=>selectPageHander(page - 1)}
                        className={`text-4xl ${page>1 ? "":"opacity-0"} `}
                        >◀️</span>
                       {
                        [...Array(products.length/10)].map((_,i) =>{
                            return <span
                            onClick={()=>selectPageHander(i+1)}
                             className={`border-1 max-w-full p-4 ${page === i+1 ? "bg-gray-400":""} `} key={i+1}>{i+1}</span>
                        })
                       }
                     
                       <span onClick={()=>selectPageHander(page + 1)}  className={`text-4xl
                        ${page<products.length/10?"":"opacity-0"}
                       `}>▶️</span>
                    </div>
            }
        </div>
    )
}
export default Pagination;