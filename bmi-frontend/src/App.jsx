import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/bmi", {
        name,
        weight: parseFloat(weight),
        height: parseFloat(height)
      });
      setResult(res.data);
    } catch (err) {
      alert("เกิดข้อผิดพลาด: " + err.message);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      <h1>BMI Tracker (Mock API)</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "300px", gap: "10px" }}>
        <input placeholder="ชื่อ" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="น้ำหนัก (กก.)" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <input placeholder="ส่วนสูง (ซม.)" value={height} onChange={(e) => setHeight(e.target.value)} />
        <button type="submit">คำนวณ</button>
      </form>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <p>สวัสดี {result.name}!</p>
          <p>BMI ของคุณคือ <b>{result.bmi}</b></p>
          <p>สถานะ: <b>{result.status}</b></p>
        </div>
      )}
    </div>
  );
}

export default App;
