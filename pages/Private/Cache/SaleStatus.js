import { faSearch, faCog, faBarChart, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import WebHelper from "../../../components/Function/WebHelper";
import Pagination from "../../../components/partials/Footer/Pagination";
import FloatBox from "../../../components/partials/Modal/FloatBox";
import AccountDetails from "../../../components/Sales/AccountDetails";

const SaleStatus = (() => {
    return (
        <>
            <div className=" p-2 w-full">
                <h2 className="page-title my-5">캐시관리</h2>

                {/* return  a type of sales record type  */}
                <FilterCategory />

                {/* Return the SaleStatus Records */}
                <SaleStatusRecord />

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

const SaleStatusRecord = (() => {

    const [TableType, setTableType] = useState();

    // Create a container array for dummy data
    const data = [];

    // Push data to the container array
    for (let i = 0; i < 5; i++) { data.push(i); }

    return (
        <>
            <table className="app-table">
                <thead>
                    <tr>
                        <th>날짜</th>
                        <th>회원가입</th>
                        <th>회원입금</th>
                        <th>회원출금</th>
                        <th>수익(입-출)</th>
                        <th>회원보유머니</th>
                        <th>회원보유포인트</th>
                        <th>파트너입금</th>
                        <th>파트너출금</th>
                        <th>수익(입-출)</th>
                        <th>파트너보유머니</th>
                        <th>파트너보유포인트</th>
                        <th>상세</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>2022-04-28</td>
                            <td className="hover:bg-stone-800 cursor-pointer" onClick={() => TableType == 1 ? setTableType(null) : setTableType(1)}>2</td>
                            <td className="hover:bg-stone-800 cursor-pointer" onClick={() => TableType == 2 ? setTableType(null) : setTableType(2)}><span className="text-blue-400">12,965,000</span> (35/22)</td>
                            <td className="hover:bg-stone-800 cursor-pointer" onClick={() => TableType == 3 ? setTableType(null) : setTableType(3)}><span className="text-red-400">-12,965,000</span> (1/1)</td>
                            <td><div className="py-1 px-3 bg-blue-600 rounded">12,965,000</div></td>
                            <td className="text-green-500">21,334,100</td>
                            <td className="text-yellow-500">9,523,410</td>
                            <td className="hover:bg-stone-800 cursor-pointer" onClick={() => TableType == 4 ? setTableType(null) : setTableType(4)}><span className="text-blue-400">12,965,000</span> (35/22)</td>
                            <td className="hover:bg-stone-800 cursor-pointer" onClick={() => TableType == 5 ? setTableType(null) : setTableType(5)}><span className="text-red-400">-12,965,000</span> (1/1)</td>
                            <td><div className="py-1 px-3 bg-red-600 rounded">-12,965,000</div></td>
                            <td className="text-green-500">21,334,100</td>
                            <td className="text-yellow-500">9,523,410</td>
                            <td>
                                <button className="category-btn  bg-blue-500  rounded mr-1" onClick={() => TableType == 6 ? setTableType(null) : setTableType(6)}><FontAwesomeIcon icon={faBarChart} /></button>
                                <button className="category-btn  bg-green-500  rounded mr-1" onClick={() => TableType == 7 ? setTableType(null) : setTableType(7)}><FontAwesomeIcon icon={faBarChart} /></button>
                            </td>
                        </tr>
                    ))}

                    {TableType &&
                        <tr>
                            <td colSpan={13}>
                                <div className="border-2 border-stone-700 bg-stone-900 p-5">

                                    {TableType == 1 &&
                                        <>
                                            <h2 className="text-xl text-left mb-5">회원가입 :: <span className="text-yellow-500">2022-04-28</span></h2>
                                            <button className="category-btn bg-green-700 mr-1 my-5 w-full">엑셀데이타로 저장하기</button>
                                            <MemberTable />
                                        </>
                                    }

                                    {TableType == 2 &&
                                        <>
                                            <h2 className="text-xl text-left mb-5"> 입금정보 :: <span className="text-yellow-500">2022-04-28</span></h2>
                                            <button className="category-btn bg-green-700 mr-1 my-5 w-full">엑셀데이타로 저장하기</button>
                                            <DepositTable />
                                        </>
                                    }

                                    {TableType == 3 &&
                                        <>
                                            <h2 className="text-xl text-left mb-5"> 출금정보 :: <span className="text-yellow-500">2022-04-28</span></h2>
                                            <button className="category-btn bg-green-700 mr-1 my-5 w-full">엑셀데이타로 저장하기</button>
                                            <ExchangeTable />

                                        </>
                                    }

                                    {TableType == 4 &&
                                        <>
                                            <h2 className="text-xl text-left "> 파트너입금 :: <span className="text-yellow-500">2022-04-28</span></h2>
                                            <button className="category-btn bg-green-700 mr-1 my-5 w-full">엑셀데이타로 저장하기</button>
                                            <PartnerDepositTable />
                                        </>
                                    }

                                    {TableType == 5 &&
                                        <>
                                            <h2 className="text-xl text-left "> 파트너출금 :: <span className="text-yellow-500">2022-04-28</span></h2>
                                            <button className="category-btn bg-green-700 mr-1 my-5 w-full">엑셀데이타로 저장하기</button>
                                            <PartnerExchangeTable />
                                        </>
                                    }

                                    {TableType == 6 &&
                                        <>
                                            <h2 className="text-xl text-left "> 상세정보  :: <span className="text-yellow-500">2022-04-28</span></h2>
                                            <button className="category-btn bg-green-700 mr-1 my-5 w-full">엑셀데이타로 저장하기</button>
                                            <DetailsTable />
                                        </>
                                    }

                                    {TableType == 7 &&
                                        <>
                                            <h2 className="text-xl text-left "> 입금정보  :: <span className="text-yellow-500">2022-04-28</span></h2>
                                            <button className="category-btn bg-green-700 mr-1 my-5 w-full">엑셀데이타로 저장하기</button>
                                            <AccountDetails />
                                        </>
                                    }
                                    <Pagination />
                                </div>
                            </td>
                        </tr>

                    }

                </tbody>
                <thead>
                    <tr>
                        <th>최종정산일 기준 현재합계</th>
                        <th className="hover:bg-stone-800 cursor-pointer" >2</th>
                        <th className="hover:bg-stone-800 cursor-pointer" ><span className="text-blue-400">12,965,000</span> (35/22)</th>
                        <th className="hover:bg-stone-800 cursor-pointer" ><span className="text-red-400">-12,965,000</span> (1/1)</th>
                        <th><div className="py-1 px-3 bg-blue-600 rounded">12,965,000</div></th>
                        <th className="text-green-500">21,334,100</th>
                        <th className="text-yellow-500">9,523,410</th>
                        <th className="hover:bg-stone-800 cursor-pointer" ><span className="text-blue-400">12,965,000</span> (35/22)</th>
                        <th className="hover:bg-stone-800 cursor-pointer" ><span className="text-red-400">-12,965,000</span> (1/1)</th>
                        <th><div className="py-1 px-3 bg-red-600 rounded">-12,965,000</div></th>
                        <th className="text-green-500">21,334,100</th>
                        <th className="text-yellow-500">9,523,410</th>
                        <th>
                            <button className="category-btn  bg-blue-500  rounded mr-1" ><FontAwesomeIcon icon={faBarChart} /></button>
                            <button className="category-btn  bg-green-500  rounded mr-1" ><FontAwesomeIcon icon={faBarChart} /></button>
                        </th>
                    </tr>
                </thead>
            </table>
        </>
    )
});

const MemberTable = (() => {
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
                            <td className="text-blue-400">test7</td>
                            <td>max</td>
                            <td>max</td>
                            <td><b className="bg-level-1"></b>max</td>
                            <td>2021-12-16 04:30:29</td>

                            <td className="relative">
                                <div className="option-modal-btn cursor-pointer" onClick={() => {

                                    // Check if the float box is already open
                                    if (index == floatIndex) return setFloatIndex(null);

                                    // show the float box if the first condition is not met
                                    setFloatIndex(index);

                                }}>알 지급/회수</div>

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
                            <td>
                                {index % 3 == 0 && <span >대기회원</span>}
                                {index % 3 == 1 && <span className="text-blue-400"> 정상회원</span>}
                                {index % 3 == 2 && <span className="text-red-400">탈퇴회원</span>}
                            </td>
                            <td><FontAwesomeIcon icon={faCog} className={'cursor-pointer'} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
});

const DepositTable = (() => {
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
                        <th className="text-blue-400">충전신청금액</th>
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
                                <div className=" text-sm category-btn bg-blue-500 mr-1 py-1 border-2 border-blue-700" style={{ minWidth: '150px' }}>
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
});

const ExchangeTable = (() => {
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
});

const PartnerDepositTable = (() => {

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
                        <th className="text-blue-400">닉네임</th>
                        <th >보유머니</th>
                        <th>보유포인트</th>
                        <th >입금자명</th>
                        <th className="text-blue-400">충전신청금액</th>
                        <th >충전신청일시</th>
                        <th >분류</th>
                        <th>승인여부</th>
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
                            <td className="flex justify-center" >
                                <div className=" text-sm category-btn bg-blue-500 mr-1 py-1 border-2 border-blue-700" style={{ minWidth: '150px' }}>
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
});

const PartnerExchangeTable = (() => {
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
});

const DetailsTable = (() => {
    var rows = ['에볼루션', '아시안게이밍', '올벳', '비비아이엔', '드림게이밍', '마이크로게이밍', '오리엔탈', '프라그매틱플레이', '타이산', '비보게이밍', '더블유엠게이밍', '섹시게이밍',
        '오카다', '시티오브드림', '리조트월드', '까가얀', '준비중', '준비중', '프라그매틱플레이', '씨큐나인', '하바네로', '플레이엔고', '플레이스타', '비엔쥐', '아이소프트벳', '플레이슨',
        '게임아트', '제네시스', '드림테크', '아시안게이밍', '에보플레이', '비게이밍', '마이크로게이밍', '비비테크', '티피쥐', '탑트렌드', '리얼타임게이밍', , '아리스토크랏'
        , ' K 파워볼', 'K 스피드키노', 'K 파워사다리', '벳이스트 축구', '벳이스트 야구', '벳이스트 농구', '벳이스트 크리켓', '벳이스트 주사위'
    ];

    return (
        <>
            <div className="text-left">

                <div className="app-table no-border w-bg">
                    <table className="w-full text-center">
                        <thead className="table-head">
                            <tr>
                                <td>구분</td>
                                <td>배팅금 (배팅수 / 유저수) - 배팅취소액 (배팅취소수)</td>
                                <td>당첨금 (당첨수 / 유저수)</td>
                                <td>승률 (배팅금-당첨금)</td>
                                <td>게임 (배팅수) 승률</td>
                                <td>게임 (배팅액) 수익률</td>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((item, index) => (
                                <tr key={index}>
                                    <td style={{ background: '#222 ' }}>{item}</td>
                                    <td><span className="text-blue-300">-37,586,378 </span>(65/37)</td>
                                    <td><span className="text-red-500">-37,586,378 </span>(65/37)</td>
                                    <td>
                                        {index % 2 == 0 && <span className="text-red-500">-90,178</span>}
                                        {index % 2 == 1 && <span className="text-blue-300">80,178</span>}

                                    </td>
                                    <td className="text-left ">
                                        <div className="px-2">
                                            <span>  승률 : 82.85 %</span>
                                            <br></br>
                                            <progress id="pr-3" value="32" max="100" style={{ width: '100%', background: 'red' }}> 32% </progress>
                                        </div>

                                    </td>
                                    <td className="text-left">
                                        {index % 2 == 0 &&
                                            <div className="px-2">
                                                수익률 :  <span className="text-red-500"> 4.91 %</span>
                                                <br></br>
                                                <progress id="pr-2" value="32" max="100" style={{ width: '100%', }}> 32% </progress>
                                            </div>
                                        }
                                        {index % 2 == 1 &&
                                            <div className="px-2">
                                                수익률 :<span className="text-blue-300"> 4.91 %</span>
                                                <br></br>
                                                <progress id="pr-1" value="32" max="100" style={{ width: '100%', }}> 32% </progress>
                                            </div>
                                        }

                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
});

export default SaleStatus;