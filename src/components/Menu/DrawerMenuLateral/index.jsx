import React, { useContext, useState } from "react";
import { Drawer, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import LateralMenu from "../../Menu/LateralMenu";
import { AnimeContext } from "../../../providers/provider";

const DrawerMenuLateral = () => {
  const { showDrawerMenuLateral, visibleMenuLateral, onCloseMenuLateral } =
    useContext(AnimeContext);
  const [placement, setPlacement] = useState("left");

  return (
    <>
      <Space>
        <MenuOutlined
          onClick={showDrawerMenuLateral}
          style={{
            fontSize: "20px",
          }}
          type="primary"
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
