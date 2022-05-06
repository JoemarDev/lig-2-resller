import { faAdd, faAngleDoubleRight, faCog, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useState } from "react";
import WebHelper from "../../../components/Function/WebHelper";
import Pagination from "../../../components/partials/Footer/Pagination";
import FloatBox from "../../../components/partials/Modal/FloatBox";

const PartnerList = (() => {
    return (
        <>
            <div className=" p-2 w-full">
                <h2 className="page-title my-5">파트너관리</h2>

                {/* return  a type of partners */}
                <FilterCategory />

                {/* Select a date range of partner made */}
                <DateSelectionSection />

                {/* Return member data information */}
                <PartnerRecords />

                {/* Partner Pagination */}
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
                    <button className="category-btn bg-gray-700 mr-1">전체파트너</button>
                    <button className="category-btn bg-blue-500 mr-1"> 정상파트너</button>
                    <button className="category-btn bg-red-500 mr-1">탈퇴파트너</button>
                    <button className="category-btn bg-green-600 mr-1"><FontAwesomeIcon icon={faAdd} /> 파트너추가</button>
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

const PartnerRecords = (() => {

    const router = useRouter();


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
                        <th style={{ width: '350px' }}>
                            <div className="flex px-5 justify-center">
                                {/* Partner Badge */}
                                <span className="mr-2">파트너위치</span>
                                <ul className="partner-type-badge">
                                    <li className="text-red-500">본</li>
                                    <li><FontAwesomeIcon icon={faAngleDoubleRight} /></li>
                                    <li className="text-blue-500">부</li>
                                    <li><FontAwesomeIcon icon={faAngleDoubleRight} /></li>
                                    <li className="text-yellow-500">총</li>
                                    <li><FontAwesomeIcon icon={faAngleDoubleRight} /></li>
                                    <li >매</li>
                                </ul>
                                {/* End Partner Badge */}
                            </div>
                        </th>
                        <th>-</th>
                        <th>아이디	</th>
                        <th className="text-blue-400" >파트너닉네임</th>
                        <th className="text-blue-400">보유금</th>
                        <th className="text-blue-400">롤링포인트</th>
                        <th className="text-yellow-400">머니 지급/회수</th>
                        <th className="text-blue-400">회원수	</th>
                        <th>커미션방식</th>
                        <th >파트너생성일</th>
                        <th >분류</th>
                        <th >관리</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td style={{ widtd: '350px' }}>
                                <div className="flex px-5 justify-center">
                                    {/* Partner Badge */}
                                    <ul className="flex">

                                        <li className="text-red-500 mx-2">qwer</li>
                                        <li><FontAwesomeIcon icon={faAngleDoubleRight} /></li>
                                        <li className="text-blue-500 mx-2">asd</li>
                                        <li><FontAwesomeIcon icon={faAngleDoubleRight} /></li>
                                        <li className="text-yellow-500 mx-2">rty</li>
                                        <li><FontAwesomeIcon icon={faAngleDoubleRight} /></li>
                                        <li className="mx-2" >zxc</li>
                                    </ul>
                                    {/* End Partner Badge */}
                                </div>
                            </td>
                            <td>-</td>
                            <td >test7</td>
                            <td className="text-blue-400">test7</td>
                            <td className="text-blue-400">0	</td>
                            <td className="text-blue-400">0	</td>
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
                            <td className="text-blue-400 cursor-pointer" onClick={() => router.push('/Private/Members/Lists')}>4 명</td>
                            <td>
                                <div className="category-btn bg-gray-700 mr-1 px-3 py-1">
                                    카지노<span className="text-black mx-1">(루징)</span>50% /슬롯 <span className="text-black mx-1">(루징)</span>9%
                                </div>
                            </td>
                            <td >2021-12-09 01:29:11</td>
                            <td >
                                {index % 2 == 0 && <span className="text-blue-400"> 정상</span>}
                                {index % 2 == 1 && <span className="text-red-400">탈퇴</span>}
                            </td>
                            <td ><FontAwesomeIcon icon={faCog} className={'cursor-pointer'} /></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
})




export default PartnerList;