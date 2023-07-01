import React from 'react';
import { Card, CardBody, CardText, CardTitle, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
function Medicine(props) {


    let localdata = JSON.parse(localStorage.getItem("medicines"));
    const [data, setData] = useState(localdata)
    const [searchVal, setSearchVal] = useState("");

    const handleSearch =()=>{
       console.log('ooo');
       setSearchVal()
    }

    return (

        <div>
            <div className='text-center'>
                <input type="search"    className="search-input" style={{ marginBottom: '50px' }} onChange={handleSearch} />
                {/* <SearchIcon onClick={handleSearch} /> */}
            </div>

            <Container>

                <Row>
                    

                    {
                        data.map((v, i) => {
                            return (
                                <>

                                    <div className='col-3'>
                                        <Card
                                            style={{
                                                width: '15rem',
                                                borderRadius: '40px',
                                                height: '15rem',
                                                // border: '2px solid black',
                                                background: '#FF6337',
                                               
                                            }}
                                            className='box'
                                        >




                                            <CardBody style={{ height: '30px' }}>
                                                <CardTitle tag="h5" style={{ fontSize: '18px', color:'white' , fontFamily:  'sans-serif'}}>
                                                    Medidcine Name:{v.name}
                                                </CardTitle>
                                                <CardText style={{ fontSize: '15px',  color:'white' }}>

                                                    <p style={{ fontSize: '14px',  color:'white' , fontFamily:  'sans-serif'}}>Date:{v.date}</p>
                                                    <p style={{ fontSize: '14px',  color:'white', fontFamily:  'sans-serif' }}>Price:{v.price}</p>
                                                    <p style={{ fontSize: '14px',  color:'white' , fontFamily:  'sans-serif'}}> Description:{v.desc}</p>



                                                </CardText>
                                            </CardBody>
                                        </Card>

                                    </div>


                                </>


                            )
                        })
                    }

                </Row>
            </Container>
        </div>
    );
}

export default Medicine;