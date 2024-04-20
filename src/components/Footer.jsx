
const FooterContent = () => {
    return (
        <div className="w-[1180px] grid grid-rows-2 grid-cols-2 justify-between items-center gap-x-[70px]">
            <h1 className="h-[55px] pt-[25px] font-semibold text-2xl">Wallet</h1>
            <article className="w-[599px] h-[55px] pb-[30px] order-2 flex flex-r justify-between items-center gap-[15px]">
                <button className="font-semibold text-[18px]">© Wallet 2022</button>
                <button className="font-semibold text-[18px]">Privacy policy</button>
                <button className="font-semibold text-[18px]">Cookies policy</button>
                <button className="font-semibold text-[18px]">Terms of use</button>
            </article>
            <article className="w-[501px] h-[97px] pl-[50px] row-span-2 flex flex-col gap-[15px]">
                <h1 className="text-lg leading-loose">Update right to your inbox</h1>
                <div className="w-full flex flex-r gap-[25px] justify-start items-center">
                    <button className="w-[301px] h-12 bg-secondarycolor opacity-40 rounded-2xl text-left pl-[25px]">Email Address</button>
                    <button className="w-[175px] h-12 bg-purple text-secondarycolor rounded-2xl">Send</button>
                </div>
            </article>
        </div>
    )
}

const Footer = () => {
    return (
        <section className="w-[1280px] h-[210px] flex flex-r justify-center items-cente border-t-2 border-t-secondarycolor">
            <FooterContent />
        </section>
    )
}

export default Footer;