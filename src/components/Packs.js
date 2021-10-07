import React from 'react'
import { useState } from "react"
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../components/Packs.css"

import { PackDetails } from './PackDetails';

function ProductImage({ id, onExpand }) {
    return (
     <div className="img-wrap col-lg-6">
      <motion.img
        src={`https://picsum.photos/id/${id}/200/200`}
        alt=""
        onClick={() => onExpand(id)}
        className="related-product-image"
        layoutId={`product-${id}`}
      />
      </div>
    );
  }
  
  export default function Packs() {
    const [productIds, setProductIds] = useState([231, 239, 240, 241]);
    const [primaryProduct, setPrimaryProduct] = useState(237);
  
    function setAsPrimary(id) {
      const currentProductId = primaryProduct;
      const newProductIds = [
        ...productIds.filter((x) => x !== id),
        currentProductId
      ];
  
      setPrimaryProduct(id);
      setProductIds(newProductIds);
    }
  
    return (
     <div className="container pack_wrapper">
       <div className="row">
        <div className="product_images col-sm-12 col-md-12 col-lg-6">
          <AnimateSharedLayout type="crossfade">
            <main className="col-12 primary-container">
              <AnimatePresence>
                <motion.img
                  exit={{ position: "absolute" }}
                  key={primaryProduct}
                  className="primary-product-image"
                  src={`https://picsum.photos/id/${primaryProduct}/1280/620`}
                  alt=""
                  layoutId={`product-${primaryProduct}`}
                />
              </AnimatePresence>
            </main>
            <div className="col-lg-12 product-gallery">  
              <div className="row">   
                <AnimatePresence>  
                  {productIds.map((id) => (           
                      <ProductImage  id={id} key={id} onExpand={setAsPrimary}/>
                  ))}
                </AnimatePresence>
               </div>   
            </div>
          </AnimateSharedLayout>
        </div>
      <PackDetails/>  
      </div>      
     </div>   
    
    );
  }
  