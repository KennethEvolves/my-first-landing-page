
const Card = ({ data }) => {

    const { image, title, description } = data;

    return (
        <article className="w-[311px] h-[240px] flex flex-col justify-start items-center gap-[10px]">
            <img src={image} className="w-[70px] h-[70px] mb-[30px]" />
            <h3 className="font-semibold">{title}</h3>
            <p className="text-center opacity-40 text-white text-lg font-light leading-loose">{description}</p>
        </article>
    )
}

const Features = () => {
    return (
        <div className="w-[1080px] h-[348px] p-[50px] mb-[80px] flex flex-r justify-center items-center gap-[110px] max-lg:w-min max-lg:h-min max-lg:flex-col">
            <Card data={{
                image: 'cards-icon.png',
                title: 'Customizable card',
                description: 'Custom your own card for your exact incomes and expenses needs.'
            }} />
            <Card data={{
                image: 'coin-icon.png',
                title: 'No payment fee',
                description: 'Transfer your payment all over the world with no payment fee.'
            }} />
            <Card data={{
                image: 'purse-icon.png',
                title: 'All in one place',
                description: 'The right place to keep your credit and debit cards, boarding passes & more.'
            }} />
        </div>
    )
}

export default Features;