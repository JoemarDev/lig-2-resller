import { faCog, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import WebHelper from "../../../components/Function/WebHelper";
import Pagination from "../../../components/partials/Footer/Pagination";
const MemberBets = (() => {
    return (
        <>
            <div className=" p-2 w-full">
                <h2 className="page-title my-5">배팅내역</h2>

                {/* return  a type of bets */}
                <FilterCategory />

                {/* Display total and how many bet are made today */}
                <BetStatistics />

                {/* Return Deposit Data */}
                <TableSection />

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
                    <button className="category-btn bg-gray-700 mr-1">전체내역</button>
                    <button className="category-btn bg-gray-200 text-black mr-1">슬롯</button>
                    <button className="category-btn bg-blue-500 mr-1"> 카지노</button>
                    <button className="category-btn bg-red-500 mr-1">호텔카지노</button>
                    <button className="category-btn bg-yellow-600 mr-1">파워볼</button>
                    <button className="category-btn bg-green-600 mr-1">미니게임</button>
                    <button className="category-btn bg-pink-600 mr-1">벳이스트</button>
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

const BetStatistics = (() => {
    return (
        <>
            <div className="flex  items-center  mb-2">

                {/* Display the bet count made today */}

                <div className="category-btn bg-gray-700 mr-1 px-5">금일 파워볼배팅금액 : 0 건</div>

                <div className="category-btn bg-gray-200 text-black mr-1 px-5">금일 파워볼배팅금액 : 0 건</div>

                <div className="category-btn bg-blue-500 mr-1 px-5">금일 파워볼배팅금액 : 0 건</div>

                <div className="category-btn bg-red-500 mr-1 px-5">금일 파워볼배팅금액 : 0 건</div>

                <div className="category-btn bg-yellow-600 mr-1 px-5">금일 파워볼배팅금액 : 0 건</div>

                <div className="category-btn bg-green-600 mr-1 px-5">금일 파워볼배팅금액 : 0 건</div>

                <div className="category-btn bg-pink-700 mr-1 px-5">금일 파워볼배팅금액 : 0 건</div>

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
                        <th >종류</th>
                        <th>배팅일시</th>
                        <th>가입코드</th>
                        <th className="text-blue-400">닉네임</th>
                        <th>게임</th>
                        <th >라운드</th>
                        <th >배팅</th>
                        <th className="text-yellow-400">BET</th>
                        <th>배당</th>
                        <th className="text-blue-400">Win</th>
                        <th className="text-red-400">Lose	</th>
                        <th>Draw</th>
                        <th>상태</th>
                        <th>처리</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="text-red-500">벳이스트	</td>
                            <td>2022. 04. 28. 11:53:06</td>
                            <td>6666</td>
                            <td className="text-blue-400"><b className="bg-level-1"></b>max</td>
                            <td>축구</td>
                            <td className="relative"> 714</td>
                            <td>키커 왼쪽	</td>
                            <td className="text-yellow-400" >{WebHelper.FormatMoney(6000000)}원</td>
                            <td >1.95</td>
                            <td className="text-blue-400">{WebHelper.FormatMoney(50000)}원</td>
                            <td className="text-red-400">0</td>
                            <td>0 </td>
                            <td>-</td>
                            <td>
                                {index % 2 == 0 && <span className="text-blue-400">WIN</span>}
                                {index % 2 == 1 && <span className="text-red-400">LOSE</span>}


                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </>
    )
});



export default MemberBets;