import Menu from "./Menu";

const Navigation = (() => {
    return (
        <>
            <div className="navigation-section">
                <div style={{ width: '10%', textAlign: 'center', fontWeight: '900' }}>Reseller Page</div>
                <div style={{ width: '50%' }}>
                    <ul>
                        <li>회원 충전금액 <span>0</span></li>
                        <li>회원 환전금액 <span>0</span></li>
                        <li>회원 보유금액 <span>0</span></li>
                        <li className="bg-green-900 border-2 border-green-600">보유머니 <span>0 원</span></li>
                    </ul>
                    <ul>
                        <li>파트너 충전금액 <span className="text-red-400">0</span></li>
                        <li>파트너 환전금액 <span>0</span></li>
                        <li>파트너 보유금액 <span>0</span></li>
                        <li className="bg-yellow-900 border-2 border-yellow-600">포인트 <span>0 P</span></li>
                    </ul>
                </div>
                <div style={{ width: '40%' }}>
                    <ul>
                        <li style={{ justifyContent: 'center' }}>충전 </li>
                        <li style={{ justifyContent: 'center' }}>출금 </li>
                        <li style={{ justifyContent: 'center' }}>1:1문의 </li>
                        <li style={{ justifyContent: 'center' }}>쪽지함 </li>
                    </ul>
                </div>
            </div>
            <Menu />
        </>
    )
});

export default Navigation;