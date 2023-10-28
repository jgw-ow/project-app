import { Link } from "react-router-dom";
import { IoBasketOutline } from 'react-icons/io5';
import { BsCart4 } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';


function Header() {
  const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8, 
        margin: 8,
        fontSize: '30px'
        
    },
     rightSection: {
      marginLeft: 'auto'
    }
  };

  return(
      <>
           <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={styles.rightSection}>
                    {/* 로그인 버튼 */}
                    <Link to='/login' style={{ color: 'black', textDecoration: 'none' }}>로그인/회원가입</Link>
                </div>
           </div>

           <hr/>

           <div style={styles.wrapper} >
                  
                  <div style={{ margin: '0 100px' }}>
                    {/* 바구니 아이콘, npm install react-icons --save*/}
                 
                    <IoBasketOutline />  
                 

                  {/* 쓱Bay 로고 */}
                    <Link to='/' style={{ color: 'purple', textDecoration: 'none' }} >쓱<span style={{color: 'black'}}>Bay</span></Link>
                  </div>


                  {/* 상품명 입력 칸 */}
                  <div>
                      <input type="text" placeholder="상품 검색" style={{width: '300px', height: '40px', fontSize: '25px' }} />
                  </div>

                
                  
                 
                {/* 경매와 내 상점 링크 */}
                <div style={{ margin: '0 100px' }}>
                  {/* 카트 아이콘 */}
                
                  <BsCart4 />  
                      <Link to='/create' style={{color: 'black', textDecoration: 'none'}}>경매</Link> | 
                      
                        <BsFillPersonFill/>
                        
                        <Link to='/mypage' style={{color: 'black', textDecoration: 'none'}}>내 상점</Link>
                </div>
              </div>
              <hr/>
      </>
  );
}

export default Header;