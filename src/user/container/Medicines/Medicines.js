import React, { useEffect, useState } from 'react';
import ListMedicine from './ListMedicine';

function Medicines(props) {

    const [data, setData] = useState([])
    const [search,setSeacrh]=useState([])
    useEffect(() => {

        let localdata = JSON.parse(localStorage.getItem("medicine"));
        if (localdata) {
            setData(localdata)
        }
    }, [])
    const handleSeacrh=(val)=>{

        let localdata = JSON.parse(localStorage.getItem("medicine"));
        let fData=localdata.filter((v)=>{
            v.name.toLowerCase().includes(val.toLowerCase())
            console.log(v);
        })
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
                    <input type='search' name='search' onChange={(e)=>handleSeacrh(e.target.value)}/>
                    <ListMedicine mdata={data}/>
                </div>
            </section>
        </div>
    );
}

export default Medicines;