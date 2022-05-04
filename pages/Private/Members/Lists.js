import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Lists = (() => {
    return (
        <>
            <div className=" p-2 w-full">
                <h2 className="page-title my-5">회원관리</h2>
                <FilterCategory />
                <DateSelectionSection />
                <TableSection />

            </div>
        </>
    )
});

const TableSection = (() => {

    const data = [0, 0, 0, 0, 0, 0, 0, 0];
    return (
        <>
            <table className="app-table">
                <thead>
                    <tr>
                        <th className="text-blue-400">가입코드</th>
                        <th>아이디</th>
                        <th>이름</th>
                        <th className="text-blue-400">닉네임</th>
                        <th>가입일</th>
                        <th className="text-yellow-400">알 지급/회수</th>
                        <th className="text-blue-400">수익금</th>
                        <th className="text-blue-400">보유머니</th>
                        <th className="text-blue-400">보유포인트</th>
                        <th className="text-blue-400">충전합계</th>
                        <th className="text-red-400">환전합계</th>
                        <th>분류</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>asd</td>
                            <td>asd</td>
                            <td>asd</td>
                            <td>asd</td>
                            <td>asd</td>
                            <td>asd</td>
                            <td>asd</td>
                            <td>asd</td>
                            <td>asd</td>
                            <td>asd</td>
                            <td>asd</td>
                            <td>asd</td>
                            <td>asd</td>
                        </tr>
                    ))}


                </tbody>
            </table>
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


const FilterCategory = (() => {
    return (
        <>
            {/* Category and filter search section */}
            <div className="flex justify-between items-center w-full mb-2">

                {/* Left Category Section */}
                <div>
                    <button className="category-btn bg-gray-700 mr-1">전체회원</button>
                    <button className="category-btn bg-gray-200 text-black mr-1">대기회원</button>
                    <button className="category-btn bg-blue-500 mr-1"> 정상회원</button>
                    <button className="category-btn bg-red-500 mr-1">탈퇴회원</button>
                    <button className="category-btn bg-yellow-600 mr-1">작업회원</button>
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


export default Lists;