import { faAdd, faCog, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import WebHelper from "../../../components/Function/WebHelper";
import Pagination from "../../../components/partials/Footer/Pagination";
import FloatBox from "../../../components/partials/Modal/FloatBox";

const Lists = (() => {

    // State for checking if the element is loaded
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // If the page has been loaded set the mount to true
        setMounted(true);
    }, []);

    // return none if the page is not yet loaded
    if (!mounted) return false;

    return (
        <>
            <div className=" p-2 w-full">
                <h2 className="page-title my-5">회원관리</h2>

                {/* return  a type of members */}
                <FilterCategory />

                {/* Select a date range of member made */}
                <DateSelectionSection />

                {/* Return member data information */}
                <TableSection />

                {/* Member Pagination */}
                <Pagination />
            </div>
        </>
    )
});

const TableSection = (() => {

    // Create a container array for dummy data
    const data = [];

    // Push data to the container array
    for (let i = 0; i < 20; i++) { data.push(i); }

    // State value container for member specific float box active 
    const [floatIndex, setFloatIndex] = useState();

    return (
        <>
            <table className="app-table">
                <thead>
                    <tr>
                        <th className="text-blue-400">가입코드</th>
                        <th>추천인</th>

                        <th>아이디</th>
                        <th className="text-blue-400">닉네임</th>
                        <th>이름</th>

                        <th className="text-yellow-400">머니 지급/회수</th>
                        <th className="text-blue-400">수익금</th>
                        <th className="text-blue-400">보유머니</th>
                        <th className="text-blue-400">보유포인트</th>
                        <th className="text-blue-400">충전합계</th>
                        <th className="text-red-400">환전합계</th>
                        <th>가입일</th>
                        <th>최근접속일</th>
                        <th>분류</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="text-blue-400">test7</td>
                            <td>-</td>
                            <td>max</td>
                            <td className="text-blue-400"><b className="bg-level-1"></b>max</td>
                            <td>max</td>



                            <td className="relative">
                                <div className="option-modal-btn cursor-pointer" onClick={() => {

                                    // Check if the float box is already open
                                    if (index == floatIndex) return setFloatIndex(null);

                                    // show the float box if the first condition is not met
                                    setFloatIndex(index);

                                }}>머니 지급/회수</div>

                                {/* Display the float box if the index is equals to the floatIndex */}
                                {index == floatIndex && <FloatBox />}
                            </td>

                            <td>
                                {index % 2 == 0 && <span className={'text-blue-400'}>{WebHelper.FormatMoney(7000000)}원</span>}
                                {index % 2 != 0 && <span className={'text-red-400'}>-{WebHelper.FormatMoney(7000000)}원</span>}
                            </td>
                            <td className="text-blue-400">{WebHelper.FormatMoney(6000000)}원</td>
                            <td className="text-blue-400">{WebHelper.FormatMoney(50)}원</td>
                            <td className="text-blue-400">{WebHelper.FormatMoney(50000)}원</td>
                            <td className="text-red-400">{WebHelper.FormatMoney(50800)}원</td>
                            <td>2021-12-16 04:30:29</td>
                            <td>2021-12-16 05:30:29</td>
                            <td>
                                {index % 3 == 0 && <span >대기</span>}
                                {index % 3 == 1 && <span className="text-blue-400"> 정상</span>}
                                {index % 3 == 2 && <span className="text-red-400">탈퇴</span>}
                            </td>

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
                    <button className="category-btn bg-green-600 mr-1"><FontAwesomeIcon icon={faAdd} />회원추가</button>
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