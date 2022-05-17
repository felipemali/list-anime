import React, { useContext, useState } from "react";

import { Drawer, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import ListWatch from "../ListWatch";

import { AuthContext } from "../../providers/auth";

const Drawerr = () => {
  const { onClose, visible, showDrawer } = useContext(AuthContext);

  const [placement, setPlacement] = useState("top");

  return (
    <>
      <Space>
        <SearchOutlined
          style={{ fontSize: "20px" }}
          type="primary"
          onClick={showDrawer}
        />
      </Space>
      <Drawer
        title="Fechar Menu"
        placement={placement}
        width={500}
        height={800}
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
        <ListWatch />
      </Drawer>
    </>
  );
};

export default Drawerr;
