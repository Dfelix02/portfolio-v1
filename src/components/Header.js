import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Menu } from "semantic-ui-react";

function Header() {
  return (
    <div>
      <Menu inverted>
        <Button inverted color="white">
          David
        </Button>
        <Menu.Item name="home" position="right" />
        <Menu.Item name="messages" />
        <Menu.Item name="friends" />
      </Menu>
    </div>
  );
}

export default Header;
