import { faAdd, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import WebHelper from "../../Function/WebHelper";

const FloatBox = (() => {

    // State for transfer transaction type = ([0] Add+) or ([1] Deduct-)
    const [type, setType] = useState(0);

    return (
        <>
            <div className="member-float-box">

                {/* Display Member Informations */}
                <DataInformation />

                {/* Shorcuts for Member History Data */}
                {/* Shorcuts : [ Bet History ] , [ Deposit History ] ,  [ Withdrawal History ]  , [ Cash History ]  , [ Points History ] */}
                <MemberShorcuts />

                {/* Return the desire transaction type  */}

                {/* [ `getType` = set the transaction type (0 Add or 1 Deduct) ] */}
                {/* [ `transType` = return the transaction type  (0 Add or 1 Deduct) ] */}
                <TransActionPicker getType={setType} transType={type} />


                {/* Set the Amount of money to transfer */}
                <MoneyAmountConfiguration />

            </div>
        </>
    )
});

const DataInformation = (() => {
    return (
        <>
            {/* Table for data information */}
            <table className="data-information">
                <tbody>
                    <tr>
                        <th>아이디</th>
                        <td>aoao</td>
                    </tr>
                    <tr>
                        <th>이름</th>
                        <td>테스트</td>
                    </tr>
                    <tr>
                        <th>보유머니</th>
                        <td>{WebHelper.FormatMoney(500000)} 원</td>
                    </tr>
                    <tr>
                        <th>가입일	</th>
                        <td>2021/08/08 14:15</td>
                    </tr>
                </tbody>
            </table>
            {/* End of Table of data information */}
        </>
    )
});

const MemberShorcuts = (() => {
    return (
        <>
            {/* Option for the users */}
            <div className="flex items-center justify-between py-1 mt-1">
                <button className="text-xs whitespace-nowrap category-btn bg-stone-600 mr-1">배팅내역</button>
                <button className="text-xs whitespace-nowrap category-btn bg-stone-600 mr-1">충전내역</button>
                <button className="text-xs whitespace-nowrap category-btn bg-stone-600 mr-1">환전내역</button>
                <button className="text-xs whitespace-nowrap category-btn bg-stone-600 mr-1">캐시내역</button>
                <button className="text-xs whitespace-nowrap category-btn bg-stone-600">포인트내역</button>
            </div>
            {/* End of Option button */}

        </>
    )
});

const TransActionPicker = ((props) => {
    return (
        <>
            {/* Type Selection Area */}
            <div className="flex items-center justify-between py-1">
                <div onClick={() => props.getType(0)}
                    className={`${props.transType == 0 ? 'bg-stone-800' : 'bg-stone-600'} text-xs category-btn  mr-1 w-full border-2 border-stone-500 text-blue-300 text-bold cursor-pointer`}>
                    알 지급 <FontAwesomeIcon icon={faAdd} />
                </div>
                <div onClick={() => props.getType(1)}
                    className={`${props.transType == 1 ? 'bg-stone-800' : 'bg-stone-600'} text-xs category-btn  w-full border-2 border-stone-500 text-red-500 text-bold cursor-pointer`}>
                    알 회수 <FontAwesomeIcon icon={faMinus} />
                </div>
            </div>
            {/* End of Type Selection Area */}

        </>
    )
});

const MoneyAmountConfiguration = (() => {

    const [Amount, setAmount] = useState(0);

    return (
        <>
            {/* Display The Set Amount */}
            <div className="flex py-1">
                <input className="text-xs category-btn w-full bg-stone-900 border-2 border-stone-700 mr-1" value={WebHelper.FormatMoney(Amount)} placeholder="금액을 입력하세요." />
                <button className="text-sm category-btn  bg-red-800 border-2 border-red-600 whitespace-nowrap active:bg-red-600" onClick={() => setAmount(0)}>정정</button>
            </div>

            {/* Set Amount Option buttons */}
            <div className="flex items-center justify-between py-1 ">
                <button className="active:bg-stone-500 text-xs whitespace-nowrap category-btn bg-stone-300 w-full text-black mr-1" onClick={() => setAmount(Amount + 1000)}>1만원</button>
                <button className="active:bg-stone-500 text-xs whitespace-nowrap category-btn bg-stone-300 w-full text-black mr-1" onClick={() => setAmount(Amount + 5000)}>5만원</button>
                <button className="active:bg-stone-500 text-xs whitespace-nowrap category-btn bg-stone-300 w-full text-black mr-1" onClick={() => setAmount(Amount + 10000)}>10만원</button>
                <button className="active:bg-stone-500 text-xs whitespace-nowrap category-btn bg-stone-300 w-full text-black mr-1" onClick={() => setAmount(Amount + 50000)}>50만원</button>
                <button className="active:bg-stone-500 text-xs whitespace-nowrap category-btn bg-stone-300 w-full text-black" onClick={() => setAmount(Amount + 100000)}>100만원</button>
            </div>

            {/* Submit Amount Button */}
            <button className="text-xs whitespace-nowrap category-btn bg-blue-500 w-full  my-1" >확인</button>
        </>
    )
})

export default FloatBox;