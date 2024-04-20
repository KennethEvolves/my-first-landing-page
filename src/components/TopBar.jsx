const TopBar = () => {
    return (

        <section className="w-1180 h-24 flex flex-row justify-between items-center">
            <h1 className="font-semibold text-2xl">Wallet</h1>
            <div className="flex flex-row text-lg">
                <button className="w-44">Sign up</button>
                <button className="w-44 h-14 bg-purple text-primarycolor rounded-2xl">Log in</button>
            </div>
        </section>
    )
}

export default TopBar;