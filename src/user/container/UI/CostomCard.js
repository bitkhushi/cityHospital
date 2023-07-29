import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function CostomCard({values , btndata ,onclick}) {
    return (
        <div className='col-md-4'>
            <Card
                style={{
                    width: '18rem'
                }}
            >
                {
                    values.url ?
                        <img
                            alt="Sample"
                            src="https://picsum.photos/300/200"
                        /> :
                        null
                }

                <CardBody>
                    <CardTitle tag="h5">
                        {values.name}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {values.price}
                    </CardSubtitle>
                    <CardText>
                        {values.exdate}
                    </CardText>
                    <CardText>
                    {values.desc.length > 50 ? values.desc.substring(0, 50) + "..." : values.desc}                    </CardText>
                    {
                        btndata ?
                            <Button onClick={()=> onclick(values.id)}>
                               {btndata}
                            </Button> : 
                            null
                    }
                 

                </CardBody>
            </Card>

        </div>
    );
}

export default CostomCard;