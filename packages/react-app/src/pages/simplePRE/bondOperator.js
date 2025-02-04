import React from 'react'

import { Container, Row, Col } from 'react-bootstrap/';
import { InputBox, BondOperator } from '@project/react-app/src/components'


export default (props) => {

    return (
        <InputBox fluid>
            <Row>
                <Col>
                    <h4 >Bond Operator</h4>
                    <small>Click <a target="nucypher" href="https://interim-pre-application-docs.readthedocs.io/en/latest/">here</a> for documentation on running a node</small>
                    <p>Enter your node's operator address here to confirm and bond it to your stake.</p>
                </Col>
            </Row>

            <Row className="d-flex justify-content-center">
                <Col xs={12} md={8} >
                    <BondOperator operatorAddress={props.operatorAddress}></BondOperator>
                </Col>
            </Row>
        </InputBox>
    )
}