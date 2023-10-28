
import { Link } from "react-router-dom";
import MyBoardList from "./MyBoardList";
import MyShoppingList from "./MyShoppingList";
import { useState } from "react";

function MyPage() {

    const [showBoardList, setShowBoardList] = useState(false);
    const [showShoppingList, setShowShoppingList] = useState(false);

    const handlerBoardButtonClick = () => {
        setShowBoardList(true);
        setShowShoppingList(false);
    };

    const handlerShoppingButtonClick = () => {
        setShowShoppingList(true);
        setShowBoardList(false);
    };

    return(
        <>
            <div>
                마이페이지
            </div>
            <div>
                <button onClick={handlerBoardButtonClick}>게시글 보기</button>
                <button onClick={handlerShoppingButtonClick}>구매내역</button>




            </div> 
            {showBoardList && <MyBoardList />}
            {showShoppingList && <MyShoppingList />}
                                
            
        </>
    );
}

export default MyPage;