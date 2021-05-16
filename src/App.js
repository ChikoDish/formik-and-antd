import "./App.css";
import { DatePicker, Button, message, Alert } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";

function App() {
  const [date, setDate] = useState("");
  const handleChange = (value) => {
    message.info(
      `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setDate(value);
  };
  return (
    <div className="App">
      <DatePicker onChange={handleChange} />
      <Button type="primary" style={{ marginLeft: 8 }}>
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
