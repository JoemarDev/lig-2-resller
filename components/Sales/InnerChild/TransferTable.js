import { faSearch, faPlus, faCaretRight, faAngleDoubleRight, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PartnerTransfer = ((props) => {
    const data = [0, 0, 0, 0, 0, 0, 0,];
    return (
        <>
            <div className="app-table no-border w-bg">
                <table className="w-full text-center">
                    <thead>
                        <tr>
                            <td className="text-center">
                                <div className="flex items-center ml-10" style={{ width: '160px' }}>
                                    <span className="mr-3" style={{ 'whiteSpace': 'nowrap' }}>파트너위치</span>
                                    <ul className="flex items-center">
                                        <li className="mx-2 text-xs bg-stone-900 px-1  rounded border-2 border-stone-600 text-red-500">본</li>
                                        <li><FontAwesomeIcon icon={faAngleDoubleRight} /></li>
                                        <li className="mx-2 text-xs bg-stone-900 px-1  rounded border-2 border-stone-600 text-blue-300">부</li>
                                        <li><FontAwesomeIcon icon={faAngleDoubleRight} /></li>
                                        <li className="mx-2 text-xs bg-stone-900 px-1  rounded border-2 border-stone-600 text-yellow-500">총</li>
                                        <li><FontAwesomeIcon icon={faAngleDoubleRight} /></li>
                                        <li className="mx-2 text-xs bg-stone-900 px-1  rounded border-2 border-stone-600 ">매</li>
                                    </ul>
                                </div>
                            </td>
                            <td>아이디</td>
                            <td>닉네임</td>
                            <td>기존알</td>
                            <td>이동알</td>
                            <td>남은알</td>

                            <td>타입</td>
                            <td>이동경로</td>
                            <td>이동신청일시</td>
                            <td>분류</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className="px-3">
                                    <div className="flex items-center ml-10" style={{ width: '160px' }}>

                                        <ul className="flex items-center">
                                            <li className="mx-2 text-xs  px-1  rounded  text-red-500">TEST</li>
                                            <li><FontAwesomeIcon icon={faAngleDoubleRight} /></li>
                                            <li className="mx-2 text-xs  px-1  rounded  text-blue-300">TEST</li>
                                            <li><FontAwesomeIcon icon={faAngleDoubleRight} /></li>
                                            <li className="mx-2 text-xs  px-1  rounded  text-yellow-500">TEST</li>
                                            <li><FontAwesomeIcon icon={faAngleDoubleRight} /></li>
                                            <li className="mx-2 text-xs  px-1  rounded  ">TEST</li>
                                        </ul>
                                    </div>
                                </td>

                                <td>TEST</td>
                                <td className="text-blue-300">test</td>
                                <td>3,720,000원</td>
                                {props.type < 3 && <td className="text-blue-300">1,000,000원</td>}
                                {props.type > 2 && <td className="text-red-500">-1,000,000원</td>}

                                <td style={{ width: '200px' }}>
                                    <div className="bg-blue-500 py-1 rounded">500,000원</div>
                                </td>
                                <td>  <div className="flex items-center ml-10" style={{ width: '150px', 'justifyContent': 'center', 'margin': 'auto' }}>

                                    {(props.type == 2) &&

                                        <ul className="flex items-center">
                                            <li className="mx-2 text-xs  px-1  rounded  text-blue-300">부본사</li>
                                            <li><FontAwesomeIcon icon={faAngleDoubleRight} /></li>
                                            <li className="mx-2 text-xs  px-1  rounded  text-yellow-500">유저</li>
                                        </ul>
                                    }
                                    {(props.type == 1) &&

                                        <ul className="flex items-center">
                                            <li className="mx-2 text-xs  px-1  rounded  text-blue-300">부본사</li>
                                            <li><FontAwesomeIcon icon={faAngleDoubleRight} /></li>
                                            <li className="mx-2 text-xs  px-1  rounded  text-yellow-500">총판</li>
                                        </ul>
                                    }
                                </div>
                                </td>
                                <td>  <div className="flex items-center ml-10" style={{ width: '150px', 'justifyContent': 'center', 'margin': 'auto' }}>

                                    {(props.type == 2) &&
                                        <ul className="flex items-center">
                                            <li className="mx-2 text-xs  px-1  rounded  text-blue-300">test</li>
                                            <li><FontAwesomeIcon icon={faAngleDoubleRight} /></li>
                                            <li className="mx-2 text-xs  px-1  rounded  text-yellow-500">한놈만간다</li>
                                        </ul>

                                    }

                                    {(props.type == 1) &&
                                        <ul className="flex items-center">
                                            <li className="mx-2 text-xs  px-1  rounded  text-blue-300">test</li>
                                            <li><FontAwesomeIcon icon={faAngleDoubleRight} /></li>
                                            <li className="mx-2 text-xs  px-1  rounded  text-yellow-500">test</li>
                                        </ul>

                                    }
                                </div>
                                </td>
                                <td>2021-11-18 05:55:18</td>
                                <td className="text-blue-300">	승인</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
});

export default PartnerTransfer;