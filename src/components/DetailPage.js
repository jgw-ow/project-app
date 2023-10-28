import { Link, useParams, useRouteLoaderData } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DetailPage() {

    const { id } = useParams();
    

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/detail/${id}`)  // 백엔드의 API 엔드포인트로 요청
          .then(response => {
            setData([response.data]);
            console.log(response.data);
          })
          .catch(error => {''
            console.error(error);
          });
      }, []);

    return(
        <>
           {data.map(item => (
              <div key={item.id}>
                <h1>{item.name}팝니다.</h1>
                <h1>{item.price}</h1>
              </div>
              ))}
              
                  
            <div>
                <div>
                    {/* 제목 */}
                    돌 팝니다.
                    <br/>
                    현재 낙찰 예정 금액 : <input type="text"/>원
                    경매 만료 기간 : <input type="text"/>날짜
                </div>
            </div>
            <div>
                <input type="text"/>
                <button>입찰</button>
            </div>
            <div>
                테이블
            </div>
        </>
    );
}

export default DetailPage;