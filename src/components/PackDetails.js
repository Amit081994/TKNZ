import React from 'react'
import "../components/PackDetails.css"

export const PackDetails = () => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-6 pack_details_wrapper p-5">
            <div className="pack_detail">
                <h2>League of legends</h2>
                <div className="cards_total">
                     <span>5 cards in pack</span>
                </div>
                <div className="pd-top">
                      <h3 >$49.00</h3>
                </div>
              
               <div className="addItemWrapper">
                <div className="addItems">
                    <button>-</button>
                     <span>1</span>
                    <button>+</button>
                </div>
                <div className="buy_button">
                    <button>Buy Packs</button>
                </div>
               </div> 
               <div className="pd-top">
                      <h5>35 563 Total</h5>
                </div>
            </div>

             <div className="devider"></div> 

            <div className="pack_desc">
                <h3>Pack details</h3>
                <div className="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, 
                         <br/>
                         quis nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                           in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
        </div>
    )
}
