# BMI-Tracker

 ฟีเจอร์ (Features)
- เพิ่มผู้ใช้ (Add User)
- สรุปผล BMI (BMI Summary)
- กราฟสถิติ (Visualize BMI)


 โครงสร้างโปรเจกต์ (Project Structure)

BMI-Tracker-SUMMERIZER/
├── bmi_tracker.py          # โค้ดหลักสำหรับจัดการผู้ใช้และคำนวณ BMI
├── database/
│   └── bmi.db              # ฐานข้อมูล SQLite
├── requirements.txt        # รายการ library ที่ต้องติดตั้ง (เช่น matplotlib, sqlite3)
├── README.md               # เอกสารอธิบายโปรเจกต์
├── images/                 # รูปภาพประกอบ เช่น กราฟตัวอย่าง
├── utils/                  # ฟังก์ชันช่วยเหลือ เช่น validate input
│   └── helpers.py
└── tests/                  # โค้ดสำหรับทดสอบโปรเจกต์
    └── test_bmi.py



⚙️ วิธีการติดตั้งและใช้งาน (Installation & Usage)
1. โคลนโปรเจกต์จาก GitHub
- git clone https://github.com/nantakornsa/BMI-tracker.git
- cd BMI-tracker

2. รันโปรแกรมหลัก<br>
- ทำการรันเซิร์ฟเวอร์ก่อน
- python mock_api.py
- ปิดเทอมินอลแล้วทำการรันโปรแกรม
- python BMI-Tracker.py
3. การทำงานของโปรแกรม
- จะให้ทำการกรอกข้อมูล
-   ชื่อ :
-  น้ำหนัก :
- ส่วนสูง :

👨‍💻 ผู้พัฒนา (Contributors)
- นายนันทกร แสวงจิตร
- นายพชรพงศ์ สาหล่อน
- นายเกียรติพงษ์ เผดิมศักดิ์
