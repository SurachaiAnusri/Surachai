import { useState , useEffect } from 'react'
import './App.css'
import ImageProfile from './components/ImageProfile';
import Title from './components/Title';
import axios from 'axios';
import moment from 'moment';
import Titleleft from './components/Titleleft';

function App() {
  const enpoint = 'https://sheetdb.io/api/v1/rjnu11gpps65s';

  
    const [hide, setHide] = useState(false);
    const [data, setdata] = useState([]);
  
    const callAPi = async () =>{
      return axios.get(enpoint).then((response) => {
        const data = response.data
        setdata(data)
      })
    }
    console.log(data)
  
    useEffect( () =>{
      callAPi()
    }, [])
    
    return (
      <>
        <div className="main">
          <div className="leftPort">
            <ImageProfile images="/src/assets/430739178_1822175974951001_5956776849457314768_n.png" />
  
            <Title title="สุรชัย อนุศรี">
              <p>เรียนรู้ให้มากเพื่ออนาคตในวันข้างหน้า</p>
            </Title>
  
            <Title title="Contract">
              <p>{moment("2026/03/20").format("DD/MM/YYYY")}</p>
              <p style={{ display: hide ? 'none' : 'block' }}>tel: 0615286703</p>
              <button onClick={() => setHide(!hide)}>{hide ? 'show' : 'hide'}</button>
              <p>Email: nutyouze2545@gmail.com</p>
            </Title>
          </div>
  
  
          <div className="rightPort">

            <Titleleft titleleft="Profile">
              <p>ผมเป็นคนที่ชอบเกี่ยวกับฮาร์ดเเวร์เเละคอมพิวเตอร์ ผมเป็นคนที่พร้อมจะเรียนรู้สิ่งใหม่ๆ พัฒนาตัวเองได้เสมอ สามารถทำงานเป็นทีมได้ เเละยังต้องการเรียนรู้ประสบการณ์การทำงาน เพื่อต่อยอดในอนาคต</p>
            </Titleleft>

  
            <Titleleft titleleft="eduction">
            <li>2558 - 2564</li>
              <p>โรงเรียนกรรณสูตศึกษาลัย  </p>
              <p>จังหวัด สุพรรณบุรี</p>
              <p>เกรดเฉลี่ย 2.98</p>

              <li>2564 - 2567</li>
              <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p>
              <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ GPA 3.40 </p>
            </Titleleft>
            
  
            <Titleleft titleleft="skill">
              <ul>
                <li>ถ่ายภาพ</li>
                <li>ตัดต่อ</li>
                <li>ใช้โปรเเกรม lightroom</li>
                <li>ใช้โปรเเกรม photoshop</li>
              </ul>
            </Titleleft>
  
  
          </div>
        </div>
  
        <div className="tables">
          <h2>ข้อมูลคนในห้อง</h2>
            {data.map((record) => 
            <div key={record.code}>
               {record.code}
                {record.name}
             </div>
             )}
        </div>
      </>
    )
  }
  
export default App
