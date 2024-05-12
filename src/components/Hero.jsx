import PropTypes from 'prop-types';

const Hero = ({ content }) => {

    const { image, title, title2, description } = content;

    return (
        <div className="hero">
            <article className="hero-content w-580 h-446 flex flex-col justify-center xl:gap-24">
                <div className="flex flex-col gap-8">
                    <h2 className="w-full text-6xl font-semibold leading-tight max-lg:text-[40px]">{title}<br />{title2}</h2>
                    <p className="w-[425px] opacity-40 text-white text-lg font-light leading-loose max-lg:text-lg max-lg:w-[350px]">{description}</p>
                </div>
                <button className="w-44 h-14 bg-yellow text-primarycolor text-lg p-2 rounded-2xl">Get started</button>
            </article>
            <article className="w-500 h-446 bg-secondarycolor rounded-2xl max-lg:w-[350px] max-lg:h-[325px]">
                <img src={image} className="w-full h-full rounded-2xl" />
            </article>
        </div >
    )
}

Hero.propTypes = {
    content: PropTypes.object.isRequired
}

export default Hero;