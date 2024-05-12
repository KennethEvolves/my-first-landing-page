
const Logos = () => {
    return (
        <div className="w-1080 h-170 flex flex-r justify-center items-center border-y-2 border-y-secondarycolor max-md:w-[340px] max-lg:w-[700px]">
            <div className="w-[310px] h-[79px]">
                <img src="png/logos2.png" />
            </div>
            <div className="w-931 h-[90px] flex flex-r justify-center items-center bg-primarycolor absolute max-lg:hidden">
                <img src="png/logos.png" />
            </div>
        </div>
    )
}

export default Logos;