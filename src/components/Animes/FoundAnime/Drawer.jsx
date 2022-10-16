import React, { useState } from "react";
import { Drawer, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import SearchAnime from "../../../page/SearchAnime";
import "./index.css";

const Drawerr = () => {
  const [placement, setPlacement] = useState("top");
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Space>
        <SearchOutlined className="icon" type="primary" onClick={showDrawer} />
      </Space>
      <Drawer
        title="Fechar Menu"
        placement={placement}
        width={500}
        height={1150}
        onClose={onClose}
        visible={visible}

        // extra={
        //   <Space>
        //     <Button onClick={onClose}>Cancel</Button>
        //     <Button type="primary" onClick={onClose}>
        //       OK
        //     </Button>
        //   </Space>
        // }
      >
        <SearchAnime setVisible={setVisible} />
      </Drawer>
    </>
  );
};

export default Drawerr;
