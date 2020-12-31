import React from 'react';
import 'antd/dist/antd.css';
import { Card, Col, Row } from 'antd'

export default function Productlist() {
  //  const {  Card,  } = antd;
  return (
    <div>
       <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
      <Card title="product.title0" bordered={false}
        hoverable
        style={{ width: 200 }}
        cover={<img alt="product.title" src="product.image" />}
    
        >
        
          Card content
        </Card>
      </Col>
    </Row>
  </div>
    </div>
  )
}


