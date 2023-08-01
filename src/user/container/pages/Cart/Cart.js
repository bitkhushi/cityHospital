import React from 'react';
import { useSelector } from 'react-redux';

function Cart(props) {

    let cartData = useSelector(state => state.addtocart)

    let medicineData = useSelector(state => state.medicines)

    let Cartitem = cartData.cart.map((v) => {

        let medData = medicineData.medicines.find((m) => m.id === v.pid)

        return { ...medData, ...v }
    })

    console.log(Cartitem);
    return (
        <div>
            <div className="section-title">
                                <h2>Cart</h2>
                                </div>
            {
                Cartitem.map((v) => {
                    return(
                        <section id="contact" className="contact">
                        <div className="container">
                            
                                <div class="row mb-4 d-flex justify-content-between align-items-center">

                                    <div class="col-md-3 col-lg-3 col-xl-3">
                                        <h6 class="text-muted">{v.name}</h6>
                                        <h6 class="text-black mb-0">{v.desc}</h6>
                                        <h6 class="text-black mb-0">Expiry Date:{v.expiry}</h6>
                                    </div>
                                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                        <button class="btn btn-link px-2"
                                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                            <i class="fas fa-minus"></i>
                                        </button>

                                        <input id="form1" min="0" name="quantity" value={v.qty} type="number"
                                            class="form-control form-control-sm" />

                                        <button class="btn btn-link px-2"
                                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                            <i class="fas fa-plus"></i>
                                        </button>
                                    </div>
                                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                        <h6 class="mb-0">{v.price}$</h6>
                                    </div>
                                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                        <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
                                    </div>
                                </div>
                            </div>
                        

                    </section>
                    )
                })
            }

        </div>

    );
}

export default Cart;

