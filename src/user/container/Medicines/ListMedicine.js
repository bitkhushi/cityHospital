import React from 'react';
import CostomCard from '../UI/CostomCard';


function ListMedicine({mdata , onaddtocart}) {
    return (
        <>
      
            <div className='row  justify-content-between'>
                {
                    mdata.map((v, i) => {
                        return (
                            <>
                              

                              
                                <CostomCard values={v} btndata={'add to cart'} onclick={onaddtocart}/>
                                

                            </>
                        )


                    })
                }
            </div>
        </>
    );
}

export default ListMedicine;