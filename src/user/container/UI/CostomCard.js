import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function CostomCard({values}) {
    return (
        <div className='col-md-3'>
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
                        {values.desc}
                    </CardText>
                    {
                        values.btnval ?
                            <Button>
                                Button
                            </Button> : null
                    }

                </CardBody>
            </Card>

        </div>
    );
}

export default CostomCard;