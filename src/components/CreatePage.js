// CreatePage.js
import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function CreatePage() {

    const [ formData, setFormData ] = useState({
        // endTime: '',
        // startTime: '',
        itemName: '',
        itemContent: '',
        itemPrice: '',
        itemImage: ''
      });
  
    //   const refendTime = useRef(null);
    //   const refstartTime = useRef(null);
      const refitemName = useRef(null);
      const refitemContent = useRef(null);
      const refitemPrice = useRef(null);
      const refitemImage = useRef(null);
  
      const handlerChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
  
      const handlerClick = (e) => {
        e.preventDefault();
  
        const { itemName, itemContent, itemPrice, itemImage } = formData;
  
        // if (endTime.trim() === '') {
        //     alert('경매 마감시간을 입력하세요.');
        //     refendTime.current.focus();
        //     return;
        // };
  
        // if (startTime.trim() === '') {
        //     alert('경매 시작시간을 입력하세요.');
        //     refstartTime.current.focus();
        //     return;
        // };
  
        if (itemName.trim() === '') {
            alert('경매 물품 이름을 입력하세요.');
            refitemName.current.focus();
            return;
        };
  
        if (itemContent.trim() === '') {
            alert('경매 물품 내용을 입력하세요.');
            refitemContent.current.focus();
             return;
        };
  
        if (itemPrice.trim() === '') {
            alert('경매 물품 가격을 입력하세요.');
            refitemPrice.current.focus();
            return;
        };

        if (itemImage.trim() === '') {
            alert('경매 물품 이미지를 등록하세요.');
            refitemImage.current.focus();
            return;
        };
  
        // if (userPwd1.trim() !== userPwd2.trim()) {
        //     alert('패스워드가 일치하지 않습니다.');
        //     setFormData({ ...formData, userPwd1: '', userPwd2: '' });
        //     refUserPwd1.current.focus();
        //     return;
        // };
  
        alert(`경매물품: ${itemName}\n경매내용: ${itemContent}\n경매가격: ${itemPrice}\n경매이미지: ${itemImage}`);
        
        axios.put('http://127.0.0.1:5000/create', {
            // endTime,
            // startTime,
            itemName,
            itemContent,
            itemPrice,
            itemImage
        })
        .then(response => {
          alert('경매물품이 등록되었습니다.');
        })
        .catch(error => {
          alert('오류가 발생했습니다. 다시 시도해주세요.');
        });
  
      };
    
      return (
        <>
          <div>
              {/* 네모난 큰 박스 */}
              <div >
                  <h1>경매 등록</h1>
              </div>
              <div style={{ margin: '10px auto', width: 250, textAlign: "right" }}>
              {/* 경매마감시간: <input ref={refendTime} type="text" name="endTime" value={formData.endTime} onChange={handlerChange} /><br /> */}
              경매물품: <input ref={refitemName} type="text" name="itemName" value={formData.itemName} onChange={handlerChange} /><br />
              경매내용: <input ref={refitemContent} type="text" name="itemContent" value={formData.itemContent} onChange={handlerChange} /><br />
              경매가격: <input ref={refitemPrice} type="text" name="itemPrice" value={formData.itemPrice} onChange={handlerChange} /><br />
              경매이미지: <input ref={refitemImage} type="text" name="itemImage" value={formData.itemImage} onChange={handlerChange} /><br />
              
              </div>
              <div>
                <button type="submit" onClick={handlerClick}><Link to='/'>등록</Link></button>
              </div>
          </div>
        </>
      );
    }
export default CreatePage;