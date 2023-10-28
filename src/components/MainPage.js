
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MainPage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:5000/')  // 백엔드의 API 엔드포인트로 요청
          .then(response => {
            setData(response.data);
            console.log(response.data);
          })
          .catch(error => {''
            console.error(error);
          });
      }, []);
    
    return(
        <>
            <div>
                {/* 누르면 옵션 나오는 버튼 */}
                <button>최신순</button>
            </div>
            <div>
              
              {data.map(item => (
              <div key={item.id}>
                <Link to={`http://localhost:3000/detail/${item.id}`}>{item.itemName}</Link>
              </div>
              ))}       
            </div>
        </>
    );
    // return (
    //     <div>
    //       {data.map(item => (
    //         <div key={item.id}>
    //           {item.id}
    //           {item.name}
    //         </div>
    //       ))}
    //     </div>
    //   );
    
}

export default MainPage;