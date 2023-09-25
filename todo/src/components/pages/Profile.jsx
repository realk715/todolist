import { Button } from 'antd';
import { Link } from 'react-router-dom';
import React,{useEffect,useState} from 'react';
import localStorageService from '../../services/localStorageService';
import axios  from '../../config/axios';

export default function Profile(props) {
    const [userData, setUserData] = useState(null); // เก็บข้อมูลผู้ใช้
    const logout = () => {
        localStorageService.removeToken();
        props.setRole("guest")
    }
    useEffect(() => {
        // สร้างฟังก์ชันเพื่อดึงข้อมูลผู้ใช้
        const fetchUserData = async () => {
          try {
            const response = await axios.get('/todo-list'); // เปลี่ยนเส้นทาง API ตามที่คุณต้องการ
            setUserData(response.data); // ตั้งค่าข้อมูลผู้ใช้หลังจากดึงมาจากเซิร์ฟเวอร์
            console.log(userData[1].id)
          } catch (error) {
            console.error('เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้', error);
          }
        };
    
        fetchUserData(); // เรียกใช้งานฟังก์ชันเมื่อคอมโพเนนต์โหลดเสร็จ
      }, []);
    
    return (
        <div>
            <h2>
                Profile Page
            </h2>
            <p>
                <strong></strong> 
                <br />
                <strong></strong> 
            </p>
            <Link to="/todo">
                 <Button>Go to Todo</Button>
            </Link>
            <br />
            <br />
            <Link to="/login">
            <Button onClick={logout}>Logout</Button>
            </Link>

        </div>
    );
}
