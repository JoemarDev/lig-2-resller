
import WebHelper from "../../../components/Function/WebHelper";
import { useState } from "react";
import Pagination from "../../../components/partials/Footer/Pagination";

const PartnerWithdrawal = (() => {
    return (
        <>
            <div className=" p-2 w-full">
                <h2 className="page-title my-5">환전신청</h2>

                <div className="indicator-display bg-red-500">
                    <p>23:50~00:30, 휴일 다음 첫 영업일 새벽에는 은행점검으로 인해 계좌이체가 지연 될 수 있습니다.</p>
                    <p>위 시간 이외에도 몇몇 은행은 추가적 점검시간이 따로 있으니 이점 유념하시기 바랍니다.</p>
                </div>

                {/* Provide a form for partner withdrwal request */}
                <PartnerAmountIndicator />


                {/* Submit Partner Deposit Request */}
                <div className="text-center my-5">
                    <button className="category-btn bg-red-500 mr-1 px-20">출금신청</button>
                </div>

                <h2 className="page-title my-5">출금 내역</h2>

                <PartnerWithdrawalHistory />


            </div>
        </>
    )
});

const PartnerAmountIndicator = (() => {

    const [Amount, setAmount] = useState(0);

    return (
        <>
            <table className="app-table mt-5 border-2 border-stone-800 trans-table">
                <tbody>
                    <tr>
                        <th className="w-1/5 border-2 border-stone-800">통합머니</th>
                        <td className="text-left border-2 border-stone-800 text-yellow-500 pl-5">
                            {/* Partner currently balance */}
                            {WebHelper.FormatMoney(8155881)}원
                        </td>
                    </tr>

                    <tr>
                        <th className="w-1/5 border-2 border-stone-800">출금하실금액</th>
                        <td className="text-left border-2 border-stone-800 pl-5">
                            <input className="category-btn bg-stone-700 mr-1 border-2 border-stone-800 w-full w-8/12" value={WebHelper.FormatMoney(Amount)} />
                            {/* Set Amount Option buttons */}
                            <div className="flex items-center justify-between py-1 w-8/12">
                                <button className="active:bg-stone-700 text-xs whitespace-nowrap category-btn bg-stone-600 w-full  mr-1" onClick={() => setAmount(Amount + 1000)}>1만원</button>
                                <button className="active:bg-stone-700 text-xs whitespace-nowrap category-btn bg-stone-600 w-full  mr-1" onClick={() => setAmount(Amount + 5000)}>5만원</button>
                                <button className="active:bg-stone-700 text-xs whitespace-nowrap category-btn bg-stone-600 w-full  mr-1" onClick={() => setAmount(Amount + 10000)}>10만원</button>
                                <button className="active:bg-stone-700 text-xs whitespace-nowrap category-btn bg-stone-600 w-full  mr-1" onClick={() => setAmount(Amount + 50000)}>50만원</button>
                                <button className="active:bg-stone-700 text-xs whitespace-nowrap category-btn bg-stone-600 w-full  mr-1" onClick={() => setAmount(Amount + 100000)}>100만원</button>
                                <button className="active:bg-red-500 text-xs whitespace-nowrap category-btn bg-red-500 w-full " onClick={() => setAmount(0)}>정정</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th className="w-1/5 border-2 border-stone-800">출금비밀번호</th>
                        <td className="text-left border-2 border-stone-800  pl-5">
                            <input className="category-btn bg-stone-700 mr-1 border-2 border-stone-800 w-full w-8/12" type={'password'} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
});

const PartnerWithdrawalHistory = (() => {

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
                            <td className="text-red-500">1,550,000 원	</td>
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

export default PartnerWithdrawal;