import React from 'react';
import { Link } from 'react-router-dom';
import { Para } from '../UI/SubTitle/SubTitle.style';
import { Heading2 } from '../UI/Headings/Heading.style';
import { CardStylePara, CardStyleSpan, CradStyleH4, CradStyleIcon} from '../UI/Card/Card.style';
// import Doctor from './Doctor';
const docdata = [
  {
      id: 101,
      name: "Atha Smith",
      post: "Chief Medical Officer",
      docinfo: "Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.",
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
function Doctors(props) {
  return (
    <div>
      <section id="doctors" className="doctors">
        <div className="container">
          <div className="section-title">
            <Heading2>Doctors</Heading2>
            <Para>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
              tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
              ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</Para>
            <Link to='/doctor/Visiting_Doctor'>Visiting_Doctor</Link>
          </div>
          <div className="row">
            {
              docdata.map((v) => {
                return (

                  <div className="col-lg-6">
                   
                    <Link to={'/doctor/'+v.id}>
                    <div className="member d-flex align-items-start">
                      <div className="pic"><img src={v.url} className="img-doctor" alt /></div>
                      <div className="member-info">
                        <CradStyleH4>{v.name}</CradStyleH4>
                        <CardStyleSpan>{v.post}</CardStyleSpan>
                        <CardStylePara>{v.docinfo}</CardStylePara>
                        <div className="social">
                          <a href><CradStyleIcon className="ri-twitter-fill" /></a>
                          <a href><CradStyleIcon className="ri-facebook-fill" /></a>
                          <a href><CradStyleIcon className="ri-instagram-fill" /></a>
                          <a href> <CradStyleIcon className="ri-linkedin-box-fill" /></a>
                          
                        </div>
                      </div>
                      
                    </div>
                  </Link>
                  </div>


                  // ---------------------------------------------------------------------


          )
              })
            }
         
        </div>
    </div>
      </section >
    </div >

  );
}

export default Doctors;