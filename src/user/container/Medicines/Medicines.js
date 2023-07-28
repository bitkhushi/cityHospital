import React, { useEffect, useState } from 'react';
import ListMedicine from "../Medicines/ListMedicine"

function Medicines(props) {

    const [data, setData] = useState([])
    const [search,setSearch]=useState('')
    useEffect(() => {

        let localdata = JSON.parse(localStorage.getItem("medicine"));
        if (localdata) {
            setData(localdata)
        }
    }, [])
    const handleSearch = (val) => {
        console.log(val);

        let localdata = JSON.parse(localStorage.getItem("medicine"));
        
        let fData = localdata.filter((v) => 
                v.name.toLowerCase().includes(val.toLowerCase()) ||
                v.price.toString().includes(val) ||
                v.exdate.toString().includes(val) ||
                v.desc.toLowerCase().includes(val.toLowerCase())
        )
        setSearch(fData)
        console.log(fData);

    }
    return (
        <div>

            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Medicine</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                            luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                    </div>
                </div>
                <div className="container">
                    <input type='search' name='search' onChange={(e) => handleSearch(e.target.value)} />
                    <ListMedicine mdata={search.length>0?search:data} />
                </div>
            </section>
        </div>
    );
}

export default Medicines;