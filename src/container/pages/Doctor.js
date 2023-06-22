import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
const docdata = [
    {
        id: 101,
        name: "Atha Smith",
        post: "Chief Medical Officer",
        docinfo: "Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.",
        url: "../assets/img/doctors/doctors-1.jpg"
    },
    {
        id: 102,
        name: "John White",
        post: "Anesthesiologist",
        docinfo: "Aenean ac turpis ante. Mauris velit sapien.",
        url: "../assets/img/doctors/doctors-2.jpg"
    },
    {
        id: 103,
        name: "Umika Loha",
        post: "Cardiology",
        docinfo: "Curabitur luctus eleifend odio. Phasellus placerat mi.",
        url: "../assets/img/doctors/doctors-3.jpg"

    },
    {
        id: 104,
        name: "Daimy Smith",
        post: "Neurosurgeon",
        docinfo: "Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus.",
        url: "../assets/img/doctors/doctors-4.jpg"
    }

]

function Doctor(props) {
    const { id } = useParams();

    let fdata = docdata.filter((v) => v.id === parseInt(id))
    console.log(fdata);
    return (
        <>
        <div  style={{display:'flex',marginTop: '20px',marginBottom: '20px',border:'2px solid black',width:'60rem'}}>
        <img src={fdata[0].url} className="card-img-top" alt="..." style={{width: '30rem'}}/>
            <div className="row">
                <div className="card" style={{ width: '30rem', margin: '0 auto',border:'none' }}>
                    
                    <div className="card-body" style={{ color: '#00000' }}>
                        <h5 className="card-title">{fdata[0].name}</h5>
                        <h5 className="card-text" style={{ color: '#FF6337' }}>{fdata[0].post}</h5>
                        <h6 className="card-text">{fdata[0].docinfo}</h6>
                        <div className="social" style={{ fontSize: '20px', marginTop: '20px' }}>
                            <a href><i className="ri-twitter-fill" /></a>
                            <a href><i className="ri-facebook-fill" /></a>
                            <a href><i className="ri-instagram-fill" /></a>
                            <a href> <i className="ri-linkedin-box-fill" /></a>

                        </div>

                    </div>
                </div>
                

            </div>
        </div>
        



        </>

    );
}

export default Doctor;