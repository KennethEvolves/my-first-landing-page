
const TopBar = () => {
    return (
        <section className="w-full h-24 px-14 flex flex-row justify-between items-center max-xl:justify-center">
            <h1 className="font-semibold text-2xl">Wallet</h1>
            <div className="flex flex-row text-lg max-xl:hidden">
                <button className="w-44 h-12">Sign up</button>
                <button className="w-44 h-12 bg-purple text-primarycolor rounded-2xl">Log in</button>
            </div>
        </section>
    )
}

export default TopBar;