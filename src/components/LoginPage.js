import { Link } from "react-router-dom";


function LoginPage() {
  return (
    <>
      <div>
        <div className="signupbox">
          {/* 네모난 큰 박스 */}

          <div className="signupboxtitle">
            <h2>로그인</h2>
          </div>

          <div className="insertBox">
           
              {/* ID 입력란 */}
              <input className="inputField" placeholder="아이디" type="text" />
            
              {/* PWD 입력란 */}
              <input className="inputField" placeholder="비밀번호" type="text" />
            
          </div>

          <div style={{textAlign: 'center'}}>
            {/* 로그인과 회원가입 버튼 */}
            <div>
            <Link to='/'><button className="signupbutton">로그인</button></Link>
            </div>
            <div>
            <Link to='/login/signup'><button className="loginbutton">회원가입</button></Link>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

  export default LoginPage;