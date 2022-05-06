const WriteMessage = (() => {
    return (
        <>
            <div className=" p-2 w-full">
                <h2 className="page-title my-5">고객센터 - Write </h2>

                <input className="category-btn bg-stone-900 mr-1 border-2 border-stone-800 w-full my-2" placeholder="제목을 입력 하세요." />

                <textarea style={{ height: '300px' }} className="my-2 category-btn bg-stone-900 mr-1 border-2 border-stone-800 w-full" placeholder="제목을 입력 하세요." ></textarea>

                {/* Submit Partner Inquiry Request */}
                <div className="text-center">
                    <button className="category-btn bg-stone-700 mr-1 px-20">보내기</button>
                </div>
            </div>
        </>
    )
});

export default WriteMessage;