import { faDatabase, faExchangeAlt, faFlag, faHome, faSignOut, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

const Menu = (() => {

    const router = useRouter();

    return (
        <>
            <ul className="navigation-menu">

                <li style={{ width: '80%' }}>
                    <FontAwesomeIcon icon={faHome} />
                </li>
                <li>
                    <FontAwesomeIcon className="mr-2" icon={faUser} />
                    <span>회원관리</span>
                    <div className="navigation-child">
                        <div onClick={() => router.push('/Private/Members/Lists')}>회원관리</div>
                        <div onClick={() => router.push('/Private/Members/Deposit')}>회원충전관리</div>
                        <div onClick={() => router.push('/Private/Members/Withdrawal')}>회원환전관리</div>
                    </div>
                </li>
                <li>
                    <FontAwesomeIcon className="mr-2" icon={faUsers} />파트너관리
                    <div className="navigation-child">
                        <div onClick={() => router.push('/Private/Partners/Lists')}>파트너관리</div>
                        <div onClick={() => router.push('/Private/Partners/Deposit')}>파트너충전관리</div>
                        <div onClick={() => router.push('/Private/Partners/Withdrawal')}>파트너환전관리</div>
                    </div>
                </li>
                <li onClick={() => router.push('/Private/History/Bets')}>
                    <FontAwesomeIcon className="mr-2" icon={faFlag} />배팅내역
                    <div className="navigation-child">
                        <div>슬롯</div>
                        <div>카지노</div>
                        <div>호텔카지노</div>
                        <div>파워볼</div>
                        <div>미니게임</div>
                        <div>벳이스트</div>
                    </div>
                </li>
                <li>
                    <FontAwesomeIcon className="mr-2" icon={faExchangeAlt} />캐쉬 이동경로
                    <div className="navigation-child">
                        <div>관리자지급</div>
                        <div>관리자회수</div>
                        <div>파트너지급</div>
                        <div>파트너회수</div>
                    </div>
                </li>
                <li>
                    <FontAwesomeIcon className="mr-2" icon={faDatabase} />일/월별통계
                    <div className="navigation-child">
                        <div>캐시관리</div>
                        <div>포인트관리</div>
                        <div>정산1</div>
                        <div>정산2</div>
                    </div>
                </li>
                <li className="bg-red-500">
                    <FontAwesomeIcon className="mr-2" icon={faSignOut} />로그아웃

                </li>
            </ul>

        </>
    )
});

export default Menu;