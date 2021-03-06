import { faSearch, faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WebHelper from "../../../components/Function/WebHelper";
import Pagination from "../../../components/partials/Footer/Pagination";
const CashRecord = (() => {
    return (
        <>
            <div className=" p-2 w-full">
                <h2 className="page-title my-5">캐시관리</h2>

                {/* return  a type of cash record type  */}
                <FilterCategory />

                {/* Provide Form to add cash record for the lower partner or member */}
                <AddCashCacheForm />

                {/* Display total and how many cashrecord are made today */}
                <CashRecordStatistics />

                {/* Display Cash Record Data */}
                <CashRecordData />
                {/* Return pagination for cash record */}
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
                    <button className="category-btn bg-gray-700 mr-1">전체</button>
                    <button className="category-btn  bg-gray-700  mr-1">입금</button>
                    <button className="category-btn bg-gray-700 mr-1">출금</button>
                    <button className="category-btn bg-gray-700 mr-1">배팅</button>
                    <button className="category-btn bg-gray-700 mr-1"> 당첨</button>
                    <button className="category-btn bg-gray-700 mr-1">지급</button>
                    <button className="category-btn bg-gray-700 mr-1">환수</button>
                    <button className="category-btn bg-gray-700 mr-1">포인트전환</button>
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

const AddCashCacheForm = (() => {
    return (
        <>
            <div>
                <input className="category-input mr-1" placeholder="닉네임" />
                <input className="category-input mr-1" placeholder="캐시 지급금액 입력" />
                <input className="category-input mr-1" placeholder="캐시 내용" />
                <button className="category-btn bg-gray-600 mr-1"><FontAwesomeIcon icon={faAdd} />회원추가</button>

            </div>
        </>
    )
});

const CashRecordStatistics = (() => {
    return (
        <>
            <div className="flex  items-center w-full my-2">

                {/* Display the cash record count made today */}
                <div className="category-btn bg-blue-500 mr-1 px-20">전체 캐시 로그 : 124건</div>


            </div>
        </>
    )
});

const CashRecordData = (() => {

    // Create a container array for dummy data
    const data = [];

    // Push data to the container array
    for (let i = 0; i < 20; i++) { data.push(i); }

    return (
        <>
            <table className="app-table">
                <thead>
                    <tr>
                        <th>가입코드</th>
                        <th>닉네임</th>
                        <th>보유머니</th>
                        <th>입금수</th>
                        <th>출금수</th>
                        <th>승률(입금-출금)	</th>
                        <th>처리내용</th>
                        <th>캐쉬</th>
                        <th>처리시간</th>
                        <th>캐쉬합</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="text-blue-400">6666	</td>
                            <td><b className="bg-level-1"></b>max</td>
                            <td className="text-yellow-400">{WebHelper.FormatMoney(5914000)}원</td>
                            <td className="text-blue-400">{WebHelper.FormatMoney(5914000)}원</td>
                            <td className="text-red-400">{WebHelper.FormatMoney(5914000)}원</td>
                            <td className="text-blue-400">{WebHelper.FormatMoney(5914000)}원</td>
                            <td className="text-blue-400" style={{ width: '40%' }}>[입금] 100,000입금완료 / 고유코드 [yoyo99624aa3bd5b77f-1649058749]	</td>
                            <td className="text-blue-400">10,000 원</td>
                            <td >2022. 04. 04. 16:52:29	</td>
                            <td className="text-blue-400">0 원	</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
})

export default CashRecord;