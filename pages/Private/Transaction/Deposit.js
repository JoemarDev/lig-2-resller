import WebHelper from "../../../components/Function/WebHelper";
import { useState } from "react";
import Pagination from "../../../components/partials/Footer/Pagination";
const PartnerDeposit = (() => {
    return (
        <>
            <div className=" p-2 w-full">
                <h2 className="page-title my-5">충전신청</h2>
                <div className="indicator-display bg-blue-500">수표 입금시 입금처리되지 않습니다.</div>

                {/* Provide a form for partner deposit request */}
                <PartnerAmountIndicator />

                <div className="indicator-display my-5 text-blue-500">입금자명과 출금자명이 다를 경우 본인확인 요청이 있을 수 있습니다.</div>


                {/* Submit Partner Deposit Request */}
                <div className="text-center">
                    <button className="category-btn bg-blue-500 mr-1 px-20">입금신청</button>
                </div>

                <h2 className="page-title my-5">입금 내역</h2>


                {/* Return partner Deposit Historry */}
                <PartnerDepositHistory />

            </div>
        </>
    )
});

const PartnerDepositHistory = (() => {

    // Create a container array for dummy data
    const data = [];

    // Push data to the container array
    for (let i = 0; i < 20; i++) { data.push(i); }

    return (
        <>
            <table className="app-table">
                <thead>
                    <tr>
                        <th><input type={'checkbox'} /></th>
                        <th>신청일시</th>
                        <th>닉네임</th>
                        <th>입금금액	</th>
                        <th>처리일시</th>
                        <th>처리현황</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td><input type={'checkbox'} /></td>
                            <td>04/30 14:58</td>
                            <td>테스트테스트</td>
                            <td className="text-yellow-500">1,550,000 원	</td>
                            <td>05/05 11:13</td>
                            <td>
                                {index % 2 == 0 && <span className="text-blue-400">승인</span>}
                                {index % 2 == 1 && <span className="text-red-400">취소</span>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Partner Deposit History Pagination */}
            <Pagination />

        </>
    )
})

const PartnerAmountIndicator = (() => {

    const [Amount, setAmount] = useState(0);

    return (
        <>
            <table className="app-table mt-5 border-2 border-stone-800 trans-table">
                <tbody>
                    <tr>
                        <th className="w-1/5 border-2 border-stone-800">입금계좌</th>
                        <td className="text-left border-2 border-stone-800 pl-5">
                            <button className="category-btn bg-gray-700 mr-1">계좌문의</button>
                        </td>
                    </tr>
                    <tr>
                        <th className="w-1/5 border-2 border-stone-800">통합머니</th>
                        <td className="text-left border-2 border-stone-800 text-yellow-500 pl-5">
                            {/* Partner currently balance */}
                            {WebHelper.FormatMoney(8155881)}원
                        </td>
                    </tr>
                    <tr>
                        <th className="w-1/5 border-2 border-stone-800">입금계좌</th>
                        <td className="text-left border-2 border-stone-800 pl-5">
                            <input className="category-btn bg-stone-700 mr-1 border-2 border-stone-800 w-full w-8/12" value={WebHelper.FormatMoney(Amount)} />
                            {/* Set Amount Option buttons */}
                            <div className="flex items-center justify-between py-1 w-8/12">
                                <button className="active:bg-stone-500 text-xs whitespace-nowrap category-btn bg-stone-800 w-full  mr-1" onClick={() => setAmount(Amount + 1000)}>1만원</button>
                                <button className="active:bg-stone-500 text-xs whitespace-nowrap category-btn bg-stone-800 w-full  mr-1" onClick={() => setAmount(Amount + 5000)}>5만원</button>
                                <button className="active:bg-stone-500 text-xs whitespace-nowrap category-btn bg-stone-800 w-full  mr-1" onClick={() => setAmount(Amount + 10000)}>10만원</button>
                                <button className="active:bg-stone-500 text-xs whitespace-nowrap category-btn bg-stone-800 w-full  mr-1" onClick={() => setAmount(Amount + 50000)}>50만원</button>
                                <button className="active:bg-stone-500 text-xs whitespace-nowrap category-btn bg-stone-800 w-full  mr-1" onClick={() => setAmount(Amount + 100000)}>100만원</button>
                                <button className="active:bg-red-500 text-xs whitespace-nowrap category-btn bg-red-500 w-full " onClick={() => setAmount(0)}>정정</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th className="w-1/5 border-2 border-stone-800">통합머니</th>
                        <td className="text-left border-2 border-stone-800  pl-5">
                            {/* Partner  Account Name*/}
                            Partner Account Name
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
});

export default PartnerDeposit;