import { faSearch, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WebHelper from "../../../components/Function/WebHelper";
import Pagination from "../../../components/partials/Footer/Pagination";
const Transfer = (() => {
    return (
        <>

            <div className=" p-2 w-full">
                <h2 className="page-title my-5">캐쉬 이동경로</h2>

                {/* return  a type of transfers data  */}
                <FilterCategory />

                {/* Select a date range of transfer made */}
                <DateSelectionSection />

                {/* Display total and how many trasger are made today */}
                <TransferStatistics />

                {/* Display the transfer Data */}
                <TransferData />

                {/* Return Pagination of transfer data */}
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

const TransferStatistics = (() => {
    return (
        <>
            <div className="flex  items-center w-full mb-2">

                {/* Display the transfer count made today */}
                <div className="category-btn bg-gray-700 mr-1 px-20">금일 충전건수 : 0건</div>

                {/* Display the transfer Amount made today */}
                <div className="category-btn bg-blue-500 mr-1 px-20">금일 충전금액  : {WebHelper.FormatMoney(51215000)}원</div>
            </div>
        </>
    )
});


const TransferData = (() => {

    // Create a container array for dummy data
    const data = [];

    // Push data to the container array
    for (let i = 0; i < 20; i++) { data.push(i); }

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
                        <th>아이디</th>
                        <th >닉네임</th>
                        <th >기존캐쉬</th>
                        <th>이동캐쉬</th>
                        <th >남은캐쉬</th>
                        <th >타입</th>
                        <th >이동경로</th>
                        <th >이동신청일시</th>
                        <th>분류</th>
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
                            <td>max</td>
                            <td><b className="bg-level-1"></b>max</td>
                            <td>{WebHelper.FormatMoney(5000000)}원</td>
                            <td className="relative">{WebHelper.FormatMoney(1000)} P</td>
                            <td>max</td>
                            <td className="flex justify-center">
                                {index < 10 &&
                                    <>
                                        <ul className="flex justify-center">
                                            <li className="text-red-500 mx-2">qwer</li>
                                            <li><FontAwesomeIcon icon={faAngleDoubleRight} /></li>
                                            <li className="text-blue-500 mx-2">asd</li>
                                        </ul>

                                    </>
                                }

                                {index >= 10 &&
                                    <>
                                        {index % 2 == 0 && <span className="text-blue-400">파트너캐쉬충전</span>}
                                        {index % 2 == 1 && <span className="text-red-400">파트너캐쉬환전</span>}
                                    </>
                                }

                            </td>
                            <td>
                                {index < 10 &&
                                    <>
                                        <ul className="flex justify-center">
                                            <li className="text-blue-500 mx-2">qwer</li>
                                            <li><FontAwesomeIcon icon={faAngleDoubleRight} /></li>
                                            <li className="text-yellow-500 mx-2">asd</li>
                                        </ul>
                                    </>
                                }
                                {index >= 10 && '-'}
                            </td>
                            <td>2021-11-18 05:55:18 </td>
                            <td className="text-blue-400">승인</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
});

export default Transfer;