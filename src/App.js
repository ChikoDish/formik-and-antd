import "./App.css";
import { DatePicker, Button, message, Alert } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import WinBox from "winbox/src/js/winbox.js";
import "winbox/dist/css/winbox.min.css";
import Contact from "./components/Contact";

function App() {
  const [date, setDate] = useState("");

  const createModal = () => {
    let win = new WinBox({
      title: "Contact Us",
      max: true,
      focus: true,
      background: "#ff005d",
      html: <Contact />,
    });
  };
  const handleChange = (value) => {
    message.info(
      `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setDate(value);
  };
  return (
    <div className="App">
      <DatePicker onChange={handleChange} />
      <Button type="primary" style={{ marginLeft: 8 }} onClick={createModal}>
        Primary Button
      </Button>
      <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date.format("YYYY-MM-DD") : "None"}
      </div>
      <Alert
        style={{ color: "hotpink" }}
        message="Selected Date"
        description={date ? date.format("YYYY-MM-DD") : "None"}
      />
    </div>
  );
}

export default App;
