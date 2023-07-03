import React from 'react';
import CostomCard from '../UI/CostomCard';

function ListMedicine({mdata}) {
    return (
        <>
      
            <div className='row  justify-content-between'>
                {
                    mdata.map((v, i) => {
                        return (
                            <>
                              


                                <CostomCard values={v} />


                            </>
                        )


                    })
                }
            </div>
        </>
    );
}

export default ListMedicine;