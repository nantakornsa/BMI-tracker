# BMI-Tracker

โปรเจกต์ **BMI-Tracker-SUMMERIZER** เป็นแอป Python สำหรับติดตามค่า BMI ของผู้ใช้ พร้อมสรุปผลและกราฟสถิติ

---

## 🏷 Features

- **เพิ่มผู้ใช้ (Add User)**  
  ใส่ชื่อ น้ำหนัก ส่วนสูง คำนวณ BMI อัตโนมัติ
- **ดูประวัติผู้ใช้ (View User History)**  
  แสดงข้อมูลทั้งหมดที่บันทึกไว้ พร้อมวันเวลา
- **สรุปผล BMI (BMI Summary)**  
  แสดงค่า BMI ล่าสุดและสถานะน้ำหนัก: ต่ำ, ปกติ, เกิน, อ้วน
- **กราฟสถิติ (Visualize BMI)**  
  วาดกราฟ BMI ของผู้ใช้ตามช่วงเวลา (ใช้ `matplotlib`)
- **จัดเก็บข้อมูล .json**  
  ข้อมูลถูกเก็บในไฟล์ `users.json`


---

## 📂 Project Structure

BMI-Tracker-SUMMERIZER/
├── bmi_tracker.py          # โค้ดหลักสำหรับจัดการผู้ใช้และคำนวณ BMI
├── database/
│   └── users.json          # เก็บข้อมูลผู้ใช้ในรูปแบบ JSON
├── requirements.txt        # รายการ library ที่ต้องติดตั้ง (เช่น matplotlib)
├── README.md               # เอกสารอธิบายโปรเจกต์
├── images/                 # รูปภาพประกอบ เช่น กราฟตัวอย่าง
├── utils/                  # ฟังก์ชันช่วยเหลือ เช่น validate input, json helper
│   └── helpers.py
└── tests/                  # โค้ดสำหรับทดสอบโปรเจกต์
    └── test_bmi.py

---

## 💻 Installation

1. Clone โปรเจกต์จาก GitHub

```bash
git clone https://github.com/nantakornsa/BMI-Tracker-SUMMERIZER.git
cd BMI-Tracker-SUMMERIZER
```

2. รันโปรแกรมหลัก
- ทำการรันเซิร์ฟเวอร์ก่อน
- python mock_api.py
- ปิดเทอมินอลแล้วทำการรันโปรแกรม
- python BMI-Tracker.py
3. การทำงานของโปรแกรม
- จะให้ทำการกรอกข้อมูล
-   ชื่อ :
-  น้ำหนัก :
- ส่วนสูง :

## 👨‍💻 ผู้พัฒนา (Contributors)
- นายนันทกร แสวงจิตร
- นายพชรพงศ์ สาหล่อน
- นายเกียรติพงษ์ เผดิมศักดิ์
