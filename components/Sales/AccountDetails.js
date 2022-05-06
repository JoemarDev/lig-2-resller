import { faExchange } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import CashRecordChild from "./InnerChild/CashRecordChild";
import PartnerTransfer from "./InnerChild/TransferTable";

const AccountDetails = (() => {
    const [TransferOn, setTransferOn] = useState();
    return (
        <>
            <div className="text-left">
                <div className="app-table no-border w-bg app-table">
                    <table className="w-full text-center">
                        <thead className="table-head">
                            <tr>
                                <td colSpan={4} className="bg-stone-700" style={{ width: '500px' }}>유저	</td>
                                <td id="b-left" colSpan={5} style={{ background: '#222' }}>파트너	</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="bg-stone-700">날짜</td>
                                <td className="bg-stone-700">캐쉬 (지급-회수)</td>
                                <td className="bg-stone-700">포인트 (지급-회수)</td>
                                <td className="bg-stone-700">유저 포인트전환</td>
                                <td style={{ background: '#222' }}>캐쉬 (지급-회수)(파트너  <FontAwesomeIcon icon={faExchange} />  파트너)</td>
                                <td style={{ background: '#222' }}>포인트 (지급-회수) (파트너  <FontAwesomeIcon icon={faExchange} /> 회원)</td>
                                <td style={{ background: '#222' }}>파트너 포인트전환</td>
                            </tr>
                            <tr>
                                <td >2022-04-28</td>
                                <td className={` hover:bg-stone-800 cursor-pointer text-red-500 ${TransferOn == 6 && 'bg-stone-800'}`} onClick={() => { TransferOn == 6 ? setTransferOn(null) : setTransferOn(6) }}>-100,000<span className="text-white ml-2">(58)</span></td>
                                <td className={`text-blue-300 hover:bg-stone-800 cursor-pointer  ${TransferOn == 7 && 'bg-stone-800'}`} onClick={() => { TransferOn == 7 ? setTransferOn(null) : setTransferOn(7) }}>5,480,000<span className="text-white ml-2">(62)</span></td>
                                <td className={` hover:bg-stone-800 cursor-pointer text-green-500 ${TransferOn == 8 && 'bg-stone-800'}`} onClick={() => { TransferOn == 8 ? setTransferOn(null) : setTransferOn(8) }}>360,000<span className="text-white ml-2">(42)</span></td>
                                <td className={`text-blue-300 hover:bg-stone-800 cursor-pointer ${TransferOn == 1 && 'bg-stone-800'}`} id="b-left" onClick={() => { TransferOn == 1 ? setTransferOn(null) : setTransferOn(1) }}>28,000,000<span className="text-white ml-2">(37)</span></td>
                                <td className={`text-red-500 hover:bg-stone-800 cursor-pointer ${TransferOn == 2 && 'bg-stone-800'}`} onClick={() => TransferOn == 2 ? setTransferOn(null) : setTransferOn(2)}>-6,000,000<span className="text-white ml-2">(48)</span></td>
                                <td className={`text-green-500 hover:bg-stone-800 cursor-pointer ${TransferOn == 3 && 'bg-stone-800'}`} onClick={() => TransferOn == 9 ? setTransferOn(null) : setTransferOn(9)}>5,540,000<span className="text-white ml-2">(18)</span></td>

                            </tr>
                            {TransferOn &&
                                <tr>
                                    {TransferOn < 5 &&
                                        <>
                                            <td colSpan={9}>
                                                <div className="p-5 bg-green-500/10 text-left">
                                                    <h2 className="text-xl mb-5">
                                                        {TransferOn == 1 && '캐쉬지급(파트너-파트너) :: '}
                                                        {TransferOn == 2 && '캐쉬지급(파트너-회원) :: '}
                                                        {TransferOn == 3 && '캐쉬회수(파트너-파트너) :: '}
                                                        {TransferOn == 4 && '캐쉬회수(파트너-회원) :: '}
                                                        <span className="text-yellow-500">2022-04-28</span></h2>
                                                    <PartnerTransfer type={TransferOn} />
                                                </div>
                                            </td>
                                        </>
                                    }
                                    {TransferOn > 5 &&
                                        <>
                                            <td colSpan={9}>
                                                <div className="p-5 bg-green-500/10 text-left">
                                                    <h2 className="text-xl mb-5">
                                                        {TransferOn == 6 && '캐쉬지급 :: '}
                                                        {TransferOn == 7 && '포인트지급 :: '}
                                                        {TransferOn == 8 && '유저 포인트전환 :: '}
                                                        {TransferOn == 9 && '포인트전환 :: '}
                                                        <span className="text-yellow-500">2022-04-28</span></h2>

                                                    <CashRecordChild type={TransferOn} />
                                                </div>
                                            </td>
                                        </>
                                    }
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
});

export default AccountDetails;