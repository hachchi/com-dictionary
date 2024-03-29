import React from "react";
import { Row, Col } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

function CatHead() {
  return (
    // Row to contain the title with a single column layout
    <Row>
      {/* Column spanning the entire width */}
      <Col span={24}>
        {/* Container div with class 'cat_title' */}
        <div className="cat_title">
          {/* Title component with level 1 and white color */}
          <Title level={1} style={{ color: "white" }}>
            Sports
          </Title>
        </div>
      </Col>
    </Row>
  );
}

export default CatHead;
