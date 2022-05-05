import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WebHelper from "../../../components/Function/WebHelper";
import Pagination from "../../../components/partials/Footer/Pagination";

const MemberWithdrawal = (() => {
    return (
        <>
            <div className=" p-2 w-full">
                <h2 className="page-title my-5">회원환전관리</h2>

                {/* Category and filter search section */}
                <FilterCategory />

                {/* Select a date range of deposit made */}
                <DateSelectionSection />

                {/* Display total and how many withdrawal are made today */}
                <WithdrawalStatistics />

                {/* Return Withdrawal Data */}
                <WithdrawalRecords />

                {/* Withdrawal Pagination */}
                <Pagination />
            </div>
        </>
    )
});


const FilterCategory = (() => {
    return (
        <>

            {/* Category and filter search section */}
            <div className="flex justify-between items-center w-full mb-2">

                {/* Left Category Section */}
                <div>
                    <button className="category-btn bg-gray-700 mr-1">전체내역</button>
                    <button className="category-btn  bg-blue-500  mr-1">승인내역</button>
                    <button className="category-btn bg-red-500 mr-1"> 취소내역</button>
                </div>

                {/* Right Category Section */}
                <div>
                    <select className="category-input mr-1">
                        <option>회원아이디</option>
                        <option>회원명</option>
                        <option>닉네임</option>
                        <option>회원레벨</option>
                        <option>회원가입날짜</option>
                        <option>회원가입IP</option>
                        <option>최종로그인날짜</option>
                        <option>최종로그인IP</option>
                        <option>휴대폰번호</option>
                        <option>계좌번호</option>
                    </select>

                    <input className="category-input mr-1" placeholder="검색어" />

                    <button className="category-btn bg-gray-500 mr-1">
                        <FontAwesomeIcon icon={faSearch} className={'mr-1'} />검색
                    </button>
                </div>


            </div>
            {/* Category and filter search section */}
        </>
    )
});

const DateSelectionSection = (() => {
    return (
        <>
            {/* DateSelectionSection */}
            <div className="flex justify-between items-center w-full mb-2">
                <div>
                    <input type={'date'} className="category-input mr-1" placeholder="검색어" />
                    <input type={'date'} className="category-input mr-1" placeholder="검색어" />
                    <button className="category-btn bg-gray-500 mr-1">
                        <FontAwesomeIcon icon={faSearch} className={'mr-1'} />검색
                    </button>

                </div>
            </div>
        </>
    )
});

const WithdrawalStatistics = (() => {
    return (
        <>
            <div className="flex  items-center w-full mb-2">

                {/* Display the withdawal count made today */}
                <div className="category-btn bg-gray-700 mr-1 px-20">금일 환전건수 : 124건</div>

                {/* Display the withdawal Amount made today */}
                <div className="category-btn bg-red-500 mr-1 px-20">금일 환전금액  : {WebHelper.FormatMoney(51215000)}원</div>
            </div>
        </>
    )
});


const WithdrawalRecords = (() => {
    // Create a container array for dummy data
    const data = [];

    // Push data to the container array
    for (let i = 0; i < 20; i++) { data.push(i); }


    return (
        <>
            <table className="app-table">
                <thead>
                    <tr>
                        <th className="text-blue-400">가입코드</th>
                        <th>아이디</th>
                        <th className="text-blue-400">닉네임</th>
                        <th >보유머니</th>
                        <th>보유포인트</th>
                        <th >입금자명</th>
                        <th className="text-red-500">충전신청금액</th>
                        <th >충전신청일시</th>
                        <th >분류</th>
                        <th>승인여부</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="text-blue-400">test7</td>
                            <td>max</td>
                            <td><b className="bg-level-1"></b>max</td>
                            <td>{WebHelper.FormatMoney(5000000)}원</td>
                            <td className="relative">{WebHelper.FormatMoney(1000)} P</td>
                            <td>max</td>
                            <td className="flex justify-center" >
                                <div className=" text-sm category-btn bg-red-500 mr-1 py-1 border-2 border-red-700" style={{ minWidth: '150px' }}>
                                    {WebHelper.FormatMoney(6000000)} 원
                                </div>
                            </td>
                            <td>2022-01-26 14:57:42</td>
                            <td>
                                {index % 2 == 0 && <span className="text-blue-400"> 정상회원</span>}
                                {index % 2 == 1 && <span className="text-red-400">	탈퇴회원</span>}
                            </td>
                            <td>
                                {index % 2 == 0 && <span className="text-blue-400"> 승인</span>}
                                {index % 2 == 1 && <span className="text-red-400">	취소</span>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
})

export default MemberWithdrawal;