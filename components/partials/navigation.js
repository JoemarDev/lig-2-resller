import Menu from "./Menu";
import { useRouter } from "next/router";
import WebHelper from "../Function/WebHelper";
import { useState, useEffect } from "react";
const Navigation = (() => {
    const router = useRouter();

    const [isConverting, setConverting] = useState(false);


    return (
        <>
            <div className="navigation-section">
                <div style={{ width: '10%', textAlign: 'center', fontWeight: '900' }}>Reseller Page</div>
                <div style={{ width: '50%' }}>
                    <ul>
                        <li>회원 충전금액 <span className="text-blue-400">0</span></li>
                        <li>회원 환전금액 <span className="text-red-400">0</span></li>
                        <li>회원 보유금액 <span className="text-green-400">0</span></li>
                        <li className="bg-green-900 border-2 border-green-600">보유머니 <span>0 원</span></li>
                    </ul>
                    <ul>
                        <li>파트너 충전금액 <span className="text-blue-400">0</span></li>
                        <li>파트너 환전금액 <span className="text-red-400">0</span></li>
                        <li>파트너 보유금액 <span className="text-green-400">0</span></li>
                        <li className="bg-yellow-900 border-2 border-yellow-600" onClick={() => setConverting(true)}>포인트 <span>0 P</span></li>
                    </ul>
                </div>
                <div style={{ width: '40%' }}>
                    <ul>
                        <li style={{ justifyContent: 'center' }} className={'cursor-pointer'} onClick={() => router.push('/Private/Transaction/Deposit')}>충전신청 </li>
                        <li style={{ justifyContent: 'center' }} className={'cursor-pointer'} onClick={() => router.push('/Private/Transaction/Withdrawal')}>환전신청 </li>
                        <li style={{ justifyContent: 'center' }} className={'cursor-pointer'} onClick={() => setConverting(true)}>포인트전환 </li>
                        <li style={{ justifyContent: 'center' }} className={'cursor-pointer'} onClick={() => router.push('/Private/Messages/PartnerInquiry')}>1:1문의 </li>
                        <li style={{ justifyContent: 'center' }} className={'cursor-pointer'} onClick={() => router.push('/Private/Messages/PartnerNotes')}>쪽지함 </li>
                    </ul>
                </div>
            </div>
            <Menu />
            {isConverting && <PointsConvert close={() => setConverting(false)} />}

        </>
    )
});


const PointsConvert = ((props) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return;
    return (
        <>
            <div className='fixed w-full h-screen bg-stone-900/30 inset-x-0 top-0 z-40'></div>
            <div className="PointsModal">
                <h2 className="mb-5">포인트를 보유머니로 이전 하시겠습니까? </h2>
                <label className="text-xl ">포인트 : <span style={{ 'color': '#ef6598' }}>{WebHelper.FormatInteger(5000)} P</span></label>
                <label className="text-md block mb-5 mt-2 "><span className="text-yellow-200 ">{WebHelper.FormatInteger(50000)} 원</span> &#8594;
                    <span className="text-yellow-200 ml-1 ">{WebHelper.FormatInteger(5000)} 원</span></label>
                <button onClick={() => props.close()} className={`bg-blue-800 border-2 border-blue-500 active:bg-blue-900 active:border-blue-600 py-2 px-4 rounded-md font-bold mx-2 text-sm`}>확인</button>
                <button onClick={() => props.close()} className={`bg-red-900 border-2 border-red-500 active:bg-pink-900 active:border-pink-600 py-2 px-4 rounded-md font-bold mx-2 text-sm`} >취소</button>
            </div>
        </>
    )
});
export default Navigation;