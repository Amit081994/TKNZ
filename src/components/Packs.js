import React from 'react'
import { useState } from "react"
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../components/Packs.css"

import { PackDetails } from './PackDetails';


function ProductImage({ id, onExpand }) {
    return (
      <motion.img
        src={`https://picsum.photos/id/${id}/200/200`}
        alt=""
        onClick={() => onExpand(id)}
        className="related-product-image"
        layoutId={`product-${id}`}
      />
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
     <div className="pack_wrapper">
      <div className="product_images">
        <AnimateSharedLayout type="crossfade">
          <main className="primary-container">
            <AnimatePresence>
              <motion.img
                key={primaryProduct}
                className="primary-product-image"
                src={`https://picsum.photos/id/${primaryProduct}/1280/620`}
                alt=""
                layoutId={`product-${primaryProduct}`}
              />
            </AnimatePresence>
          </main>
          <div className="product-gallery">        
            <AnimatePresence>  
              {productIds.map((id) => (           
                  <ProductImage id={id} key={id} onExpand={setAsPrimary}/>
              ))}
            </AnimatePresence>
           
          </div>
        </AnimateSharedLayout>
      </div>
      <PackDetails/>        
     </div>   
    
    );
  }
  