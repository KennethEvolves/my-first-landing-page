const Star = () => {
    return (
        <>
            <img src="star.png" alt="star-icon" className="w-[20px]" />
        </>
    )
}

const Card = () => {
    return (
        <section className="userfeedback w-[1080px] h-[460px] bg-purple flex flex-col justify-center items-start rounded-3xl gap-[63px] px-40">
            <h3 className="font-semibold text-2xl text-secondarycolor leading-10">
                “Wallet is a great product! All of my most important
                information is there - credit cards, transit cards, boarding
                passes, tickets, and more. And I don't need to worry because
                it's all in one place! thanks!”
            </h3>

            <article className="h-160px flex flex-r justify-start items-center gap-[20px]">
                <img src="user-feedback.png" alt="user-feedback" className="w-[80px]" />
                <div>
                    <h5 className="opacity-40 text-lg text-primarycolor leading-loose">Johnny Owens</h5>
                    <div className="flex flex-row justify-start items-center gap-[5px]">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </div>
                </div>
            </article>
        </section>
    )
}

const UserFeedback = () => {
    return (
        <section className="w-[1280px] h-[520px] flex flex-r justify-center items-center max-xl:my-24">
            <Card />
        </section>
    )
}

export default UserFeedback;