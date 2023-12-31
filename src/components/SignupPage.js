import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function SignupPage() {

    const [ formData, setFormData ] = useState({
      userId: '',
      userPwd1: '',
      userPwd2: '',
      userPhone: '',
      userNickname: ''
    });

    const refUserId = useRef(null);
    const refUserPwd1 = useRef(null);
    const refUserPwd2 = useRef(null);
    const refUserPhone = useRef(null);
    const refUserNickname = useRef(null);

    const handlerChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handlerClick = (e) => {
      e.preventDefault();

      const { userId, userPwd1, userPwd2, userPhone, userNickname } = formData;

      if (userId.trim() === '') {
          alert('아이디를 입력하세요.');
          refUserId.current.focus();
          return;
      };

      if (userPwd1.trim() === '') {
          alert('비밀번호를 입력하세요.');
          refUserPwd1.current.focus();
          return;
      };

      if (userPwd2.trim() === '') {
          alert('비밀번호 확인을 입력하세요.');
          refUserPwd2.current.focus();
          return;
      };

      if (userPhone.trim() === '') {
        alert('전화번호를 입력하세요.');
        refUserPhone.current.focus();
        return;
      };

      if (userNickname.trim() === '') {
        alert('닉네임을 입력하세요.');
        refUserNickname.current.focus();
        return;
      };

      if (userPwd1.trim() !== userPwd2.trim()) {
          alert('패스워드가 일치하지 않습니다.');
          setFormData({ ...formData, userPwd1: '', userPwd2: '' });
          refUserPwd1.current.focus();
          return;
      };

      alert(`ID: ${userId}\nPWD1: ${userPwd1}\nPWD2: ${userPwd2}\nPHONE: ${userPhone}\nNICKNAME: ${userNickname}`);
      
      axios.put('http://127.0.0.1:5000/login/signup', {
        userId,
        userPwd: userPwd1,
        userPhone,
        userNickname
      })
      .then(response => {
        alert('회원가입이 완료되었습니다.');
      })
      .catch(error => {
        alert('오류가 발생했습니다. 다시 시도해주세요.');
      });

    };
  
    return (
      <>
        <div className="signupbox">
            {/* 네모난 큰 박스 */}
            <div className="signupboxtitle">
                <h1>회원가입</h1>
            </div>
            <div className="insertBox">
              <input className="inputField" placeholder="아이디" ref={refUserId} type="text" name="userId" value={formData.userId} onChange={handlerChange} /><br />
              <input className="inputField" placeholder="비밀번호" ref={refUserPwd1} type="password" name="userPwd1" value={formData.userPwd1} onChange={handlerChange} /><br />
              <input className="inputField" placeholder="비밀번호 확인" ref={refUserPwd2} type="password" name="userPwd2" value={formData.userPwd2} onChange={handlerChange} /> <br />
              <input className="inputField" placeholder="휴대폰 번호" ref={refUserPhone} type="text" name="userPhone" value={formData.userPhone} onChange={handlerChange} /><br />
              <input className="inputField" placeholder="닉네임" ref={refUserNickname} type="text" name="userNickname" value={formData.userNickname} onChange={handlerChange} /><br />
            </div>
            <div style={{textAlign: 'center'}}>
              <Link to='/'><button style={{marginBottom: '30px'}} className="signupbutton" type="submit" onClick={handlerClick}>가입하기</button></Link>
            </div>

        </div>
      </>
    );
  }
  
  export default SignupPage;