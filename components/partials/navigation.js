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
                        <li style={{ background: '#600f0f', border: '2px solid #a71414' }}>접속중인회원 <span>0명</span></li>
                    </ul>
                    <ul>
                        <li>파트너 충전금액 <span className="text-red-400">0</span></li>
                        <li>파트너 환전금액 <span>0</span></li>
                        <li>파트너 보유금액 <span>0</span></li>
                        <li style={{ background: '#600f0f', border: '2px solid #a71414' }}>신규회원/전체 <span>0명 / 0명</span></li>
                    </ul>
                </div>
                <div style={{ width: '40%' }}>
                    <ul>
                        <li style={{ justifyContent: 'center' }}>회원 충전금액 </li>
                        <li style={{ justifyContent: 'center' }}>회원 환전금액 </li>
                        <li style={{ justifyContent: 'center' }}>회원 보유금액 </li>
                        <li style={{ justifyContent: 'center' }}>접속중인회원 </li>
                    </ul>
                </div>
            </div>
            <Menu />
        </>
    )
});

export default Navigation;