const PartnerInquiry = (() => {
    return (
        <>
            <div className=" p-2 w-full">
                <h2 className="page-title my-5">1:1문의</h2>
            </div>
        </>
    )
});

const InquiryData = (() => {
    return (
        <>
            <table className="app-table">
                <thead>
                    <tr>
                        <th ><input type={'checkbox'} /></th>
                        <th>받은시간</th>
                        <th>읽은시간</th>
                        <th>제목</th>
                        <th>상태</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </>
    )
});


export default PartnerInquiry;
