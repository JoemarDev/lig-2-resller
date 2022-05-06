import { faSearch, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import WebHelper from "../../../components/Function/WebHelper";

const AdminRecords = (() => {

    return (
        <>
            <div className=" p-2 w-full">
                <h2 className="page-title my-5">캐시관리</h2>
                <FilterCategory />
                <TableRecords />
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
                    <div>
                        <input type={'date'} className="category-input mr-1" placeholder="검색어" />
                        <input type={'date'} className="category-input mr-1" placeholder="검색어" />
                        <button className="category-btn bg-gray-500 mr-1">
                            <FontAwesomeIcon icon={faSearch} className={'mr-1'} />검색
                        </button>
                    </div>
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


const GetRandomNumber = (() => {
    return Math.floor(Math.random() * 100000) + 1;
});


const TableRecords = (() => {


    const data = [GetRandomNumber(), GetRandomNumber(), GetRandomNumber(), GetRandomNumber(), GetRandomNumber(), GetRandomNumber(), GetRandomNumber(), GetRandomNumber(), GetRandomNumber()];
    const [Rec1, setRec1] = useState(0);


    return (
        <div className="app-table no-border w-bg">
            <table className="w-full text-center app-table">
                <thead className="table-head">
                    <tr>
                        <th className="py-1">
                            <div>
                                <p className="m-0">파트너</p>
                            </div>
                        </th>
                        <th className="py-1">
                            <div>
                                <p className="m-0">회원 입금</p>
                                <p className="m-0">파트너 입금</p>
                            </div>
                        </th>
                        <th className="py-1">
                            <div>
                                <p className="m-0">회원 출금</p>
                                <p className="m-0">파트너 출금</p>
                            </div>
                        </th>
                        <th className="py-1">
                            <div>
                                <p className="m-0">회원 수익</p>
                                <p className="m-0">파트너 수익</p>
                            </div>
                        </th>
                        <th className="py-1">
                            <div>
                                <p className="m-0">회원 보유머니</p>
                                <p className="m-0">파트너 보유머니</p>
                            </div>
                        </th>
                        <th className="py-1">
                            <div>
                                <p className="m-0">회원 보유포인트</p>
                                <p className="m-0">파트너 보유포인트</p>
                            </div>
                        </th>
                        <th className="py-1">
                            <div>
                                <p className="m-0">회원 포인트전환</p>
                                <p className="m-0">파트너 포인트전환</p>
                            </div>
                        </th>
                        <th className="py-1">
                            <div>
                                <p className="m-0">회원 캐쉬지급</p>
                                <p className="m-0">파트너 캐쉬지급</p>
                            </div>
                        </th>
                        <th className="py-1">
                            <div>
                                <p className="m-0">회원 포인트지급</p>
                                <p className="m-0">파트너 포인트지급</p>
                            </div>
                        </th>

                    </tr>
                    <tr>
                        <th className="bg-green-900/50 py-1">
                            <div>
                                <p className="m-0">정산합계</p>
                            </div>
                        </th>
                        <th className="bg-green-900/50 py-1">
                            <div>
                                <p className="m-0 text-blue-400">{WebHelper.FormatInteger(data.reduce((a, b) => a + b, 0) * 1)}</p>
                                <p className="m-0 text-blue-400">{WebHelper.FormatInteger(data.reduce((a, b) => a + b, 0) * 2)}</p>
                            </div>
                        </th>
                        <th className="bg-green-900/50 py-1">
                            <div>
                                <p className="m-0 text-red-500">{WebHelper.FormatInteger(data.reduce((a, b) => a + b, 0) * 3)}</p>
                                <p className="m-0 text-red-500">{WebHelper.FormatInteger(data.reduce((a, b) => a + b, 0) * 4)}</p>
                            </div>
                        </th>
                        <th className="bg-green-900/50 py-1">
                            <div>
                                <div className="bg-red-700 p-0 rounded border-2 border-red-500 mb-1">
                                    <span>{WebHelper.FormatInteger(data.reduce((a, b) => a + b, 0) * 5)}</span>
                                </div>
                                <div className="bg-blue-700 p-0 rounded border-2 border-blue-500">
                                    <span>{WebHelper.FormatInteger(data.reduce((a, b) => a + b, 0) * 6)}</span>
                                </div>

                            </div>
                        </th>
                        <th className="bg-green-900/50 py-1">
                            <div>
                                <p className="m-0 text-green-500">{WebHelper.FormatInteger(data.reduce((a, b) => a + b, 0) * 7)}</p>
                                <p className="m-0 text-green-500">{WebHelper.FormatInteger(data.reduce((a, b) => a + b, 0) * 8)}</p>
                            </div>
                        </th>
                        <th className="bg-green-900/50 py-1">
                            <div>
                                <p className="m-0 text-yellow-500">{WebHelper.FormatInteger(data.reduce((a, b) => a + b, 0) * 9)}</p>
                                <p className="m-0 text-yellow-500">{WebHelper.FormatInteger(data.reduce((a, b) => a + b, 0) * 10)}</p>
                            </div>
                        </th>
                        <th className="bg-green-900/50 py-1">
                            <div>
                                <p className="m-0 text-pink-500">{WebHelper.FormatInteger(data.reduce((a, b) => a + b, 0) * 11)}</p>
                                <p className="m-0 text-pink-500">{WebHelper.FormatInteger(data.reduce((a, b) => a + b, 0) * 12)}</p>
                            </div>
                        </th>
                        <th className="bg-green-900/50 py-1">
                            <p className="m-0 text-blue-400">{WebHelper.FormatInteger(data.reduce((a, b) => a + b, 0) * 13)}</p>
                            <p className="m-0 text-blue-400 ">{WebHelper.FormatInteger(data.reduce((a, b) => a + b, 0) * 14)}</p>
                        </th>
                        <th className="bg-green-900/50 py-1">
                            <div>
                                <p className="m-0 text-blue-400 ">{WebHelper.FormatInteger(data.reduce((a, b) => a + b, 0) * 15)}</p>
                                <p className="m-0 text-blue-400">{WebHelper.FormatInteger(data.reduce((a, b) => a + b, 0) * 16)}</p>
                            </div>
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {

                        return (


                            <tr key={index}>
                                <td style={{ width: '400px' }} >
                                    <div>
                                        <div className="flex items-center ml-10" style={{ width: '160px' }}>
                                            <ul className="flex items-center ">
                                                <li className="mx-2 text-xs  px-1  rounded  text-red-500">TEST</li>
                                                <li><FontAwesomeIcon icon={faAngleDoubleRight} /></li>
                                                <li className="mx-2 text-xs  px-1  rounded  text-blue-300">TEST</li>
                                                <li><FontAwesomeIcon icon={faAngleDoubleRight} /></li>
                                                <li className="mx-2 text-xs  px-1  rounded  text-yellow-500">TEST</li>
                                                <li><FontAwesomeIcon icon={faAngleDoubleRight} /></li>
                                                <li className="mx-2 text-xs  px-1  rounded  ">TEST</li>
                                            </ul>
                                        </div>
                                        {index % 2 == 0 && <div style={{ width: '400px' }} className="bg-stone-500 py-1 rounded">죽장 30%</div>}
                                        {index % 2 == 1 && <div style={{ width: '400px' }} className="bg-stone-500 py-1 rounded">슬롯 2%,카지노 2%,호텔카지노 3%,미니게임 3%,벳이스트 3%</div>}

                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="m-0">{WebHelper.FormatInteger(item * 1)}</p>
                                        <p className="m-0">{WebHelper.FormatInteger(item * 2)}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="m-0">{WebHelper.FormatInteger(item * 3)}</p>
                                        <p className="m-0">{WebHelper.FormatInteger(item * 4)}</p>

                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="m-0">{WebHelper.FormatInteger(item * 5)}</p>
                                        <p className="m-0">{WebHelper.FormatInteger(item * 6)}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="m-0">{WebHelper.FormatInteger(item * 7)}</p>
                                        <p className="m-0">{WebHelper.FormatInteger(item * 8)}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="m-0">{WebHelper.FormatInteger(item * 9)}</p>
                                        <p className="m-0">{WebHelper.FormatInteger(item * 10)}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="m-0">{WebHelper.FormatInteger(item * 11)}</p>
                                        <p className="m-0">{WebHelper.FormatInteger(item * 12)}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="m-0">{WebHelper.FormatInteger(item * 13)}</p>
                                        <p className="m-0">{WebHelper.FormatInteger(item * 14)}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="m-0">{WebHelper.FormatInteger(item * 15)}</p>
                                        <p className="m-0">{WebHelper.FormatInteger(item * 16)}</p>
                                    </div>
                                </td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
});

export default AdminRecords;