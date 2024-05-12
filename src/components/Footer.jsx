
const Input = () => {
    return (
        <input placeholder="Email address" className="w-3/5 h-12 bg-secondarycolor opacity-40 rounded-2xl text-left pl-[25px] max-xl:w-full"></input>
    )
}

const Button = () => {
    return (
        <button className="bg-purple w-2/5 px-6 py-3 rounded-2xl text-secondarycolor max-xl:w-full">Send</button>
    )
}

const FooterContent = () => {
    return (
        <div className="footer w-[1180px] grid grid-rows-2 grid-cols-2 justify-between items-center gap-x-[70px]">
            <h1 className="h-[55px] pt-[25px] font-semibold text-2xl max-xl:ml-12">Wallet</h1>
            <article className="footer-info w-[599px] h-[55px] pb-[30px] order-2 flex flex-r justify-between items-center gap-[15px]">
                <button className="font-semibold text-[18px]">© Wallet 2022</button>
                <button className="font-semibold text-[18px]">Privacy policy</button>
                <button className="font-semibold text-[18px]">Cookies policy</button>
                <button className="font-semibold text-[18px]">Terms of use</button>
            </article>

            <article className="w-[501px] h-[97px] pl-[50px] row-span-2 flex flex-col gap-[15px] max-xl:w-[350px] max-xl:items-start">
                <h1 className="text-lg leading-loose">Update right to your inbox</h1>
                <div className="w-full flex gap-2 justify-start items-center max-xl:flex-col max-xl:gap-4">
                    <Input />
                    <Button />
                </div>
            </article>

        </div>
    )
}

const Footer = () => {
    return (
        <section className="w-full h-[210px] flex flex-r justify-center max-xl:items-start max-xl:pt-14 border-t-2 border-t-secondarycolor max-xl:h-[500px]">
            <FooterContent />
        </section>
    )
}

export default Footer;