const ViewMessage = (() => {
    return (
        <>
            <div className=" p-2 w-full">


                <div className="flex my-5 justify-between">
                    <div><h2 className="page-title ">쪽지함</h2></div>
                    <div>
                        <button className="category-btn bg-stone-700 mr-1">삭제</button>
                    </div>

                </div>

                <div className="indicator-display text-left px-5 flex justify-between my-2">
                    <span>[ 입금계좌문의 ] 입금계좌를 요청합니다</span>
                    <span>05/06 10:07</span>
                </div>

                <div className="indicator-display text-left px-5 my-2 bg-stone-900">
                    <span>[ 입금계좌문의 ] 입금계좌를 요청합니다</span>
                </div>

                <div className="indicator-display text-left px-5 my-2 bg-stone-900">
                    <p>안녕하세요 👋오징어파워볼 운영진 입니다.</p>
                    <p>--------------------------------------------</p>
                    <p>입금은행 :</p>
                    <p>계좌번호 :</p>
                    <p>예금주명 : <br />--------------------------------------------<br />📌 ATM 입금 불가능합니다.</p>
                    <p>📌 100원 단위 입금 처리 불가</p>
                    <p>📌 타명의 충전의 경우 처리 불가</p>
                    <p>📌 이전 계좌 충전의 경우 처리 불가</p>
                    <p>📌 무통장 거래를 이용한 충전의 경우 처리 불가</p>
                    <p>📌 그 외 문제가 될 소지가 있는 충전의 경우 처리 불가</p>
                    <p>📌소중한 아이디를 남용 할 시 법적으로 처벌이 될 수 있습니다.<br /><br />- 매번 충전 계좌 문의 → 안내받은 계좌로 입금 → 입금하신 올바른 금액을 충전신청</p>
                    <p># 간편송금어플로는 입금하셔도 입금 처리 불가 합니다(토스.카카오페이등 사용불가)</p>
                    <p>24시간 문의 텔레그램 :</p>
                </div>

            </div>

        </>
    )
});

export default ViewMessage;