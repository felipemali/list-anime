import React, { useContext, useState } from "react";

import { Drawer, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import LateralMenu from "../../Menu/LateralMenu";

import { AuthContext } from "../../../providers/auth";

const DrawerMenuLateral = () => {
  const { showDrawerMenuLateral, visibleMenuLateral, onCloseMenuLateral } =
    useContext(AuthContext);

  const [placement, setPlacement] = useState("left");

  return (
    <>
      <Space>
        <MenuOutlined
          style={{ fontSize: "20px", marginLeft: "90%" }}
          type="primary"
          onMouseEnter={showDrawerMenuLateral}
        />
      </Space>
      <Drawer
        title="Fechar Menu"
        placement={placement}
        width={350}
        height={800}
        visible={visibleMenuLateral}
        onClose={onCloseMenuLateral}
        // extra={
        //   <Space>
        //     <Button onClick={onClose}>Cancel</Button>
        //     <Button type="primary" onClick={onClose}>
        //       OK
        //     </Button>
        //   </Space>
        // }
      >
        <LateralMenu />
      </Drawer>
    </>
  );
};

export default DrawerMenuLateral;
