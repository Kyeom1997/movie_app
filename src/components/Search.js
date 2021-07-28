import React from "react";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const onSearch = (value) => console.log(value);
<Search
  placeholder="input search text"
  enterButton="Search"
  size="large"
  suffix={suffix}
  onSearch={onSearch}
/>;

export default Search;
