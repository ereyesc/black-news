import { Drawer } from "antd";

interface DrawerPanelProps {
  onClose(): void;
  visible: boolean;
}

const DrawerPanel: React.FC<DrawerPanelProps> = ({ onClose, visible }) => {
  return (
    <Drawer
      title="Basic Drawer"
      placement={"left"}
      closable={false}
      onClose={onClose}
      visible={visible}
      key={"left"}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default DrawerPanel;
