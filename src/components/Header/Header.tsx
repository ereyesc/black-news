import { useState, useEffect, useRef } from "react";
import { Row, Col, Input, AutoComplete, Dropdown, Form } from "antd";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import { MenuList } from "./Menu";
import DrawerPanel from "./Drawer";
import "./Header.css";

const { Search } = Input;

const getRandomInt = (max: number, min: number = 0) => {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
};

const searchResult = async (query: string) =>
  new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              Found {query} on{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

const Header = () => {
  const [options, setOptions] = useState([] as any);
  const [showInput, setShowInput] = useState<boolean>(false);
  const [value, setValue] = useState('');
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setShowInput(false);
    }
  };

  const handleSearch = async (value: string) => {
    console.log('value', value);
    setOptions(value ? await searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log("onSelect", value);
  };

  const handleShowDrawer = () => {
    setShowDrawer(true);
  };

  const handleOnClose = () => {
    setShowDrawer(false);
  };

  const onChange = (data: string) => {
    setValue(data);
  };

  const handleEnter = (e: any) => {
    if (e.keyCode === 13) {
      console.log('Enter send search', value);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
  return (
    <Row className="top">
      <Col xs={3} md={3} lg={0} className="menu-icon">
        <MenuOutlined onClick={handleShowDrawer} style={{ fontSize: "150%" }} />
      </Col>
      <Col xs={0} md={0} lg={3} className="underline">
        Inicio
      </Col>

      <Dropdown overlay={MenuList} placement="bottomLeft" arrow>
        <Col xs={0} md={0} lg={4} className="underline">
          Noticias
        </Col>
      </Dropdown>

      <Col xs={0} md={0} lg={4} className="underline">
        Nosotros
      </Col>
      {!showInput && (
        <Col xs={0} md={0} lg={4} className="underline gold">
          Suscribirse
        </Col>
      )}
      {!showInput && (
        <Col
          xs={3}
          md={3}
          lg={3}
          className="search-icon"
          onClick={() => setShowInput(true)}
        >
          <SearchOutlined style={{ fontSize: "130%" }} />
        </Col>
      )}
      {showInput && (
        <Col xs={18} md={18} lg={12} className="search-container" ref={ref}>
          <AutoComplete
            dropdownMatchSelectWidth={252}
            style={{ width: "100%" }}
            options={options}
            onSelect={onSelect}
            onSearch={handleSearch}
            onChange={onChange}
            onKeyDown={handleEnter}
          >
            <Search className="search" placeholder="Buscar" enterButton />
          </AutoComplete>
        </Col>
      )}
      <DrawerPanel visible={showDrawer} onClose={handleOnClose} />
    </Row>
  );
};

export default Header;
