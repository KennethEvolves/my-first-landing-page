import PropTypes from 'prop-types';

const Hero = ({ content }) => {

    const { image, title, title2, description } = content;

    return (

        <div className="w-1080 h-600 flex flex-row justify-around items-center">
            <article className="w-580 h-446 flex flex-col justify-center gap-24">
                <div className="flex flex-col gap-8">
                    <h2 className="w-full text-6xl font-semibold leading-tight">{title}<br />{title2}</h2>
                    <p className="w-[425px] opacity-40 text-white text-lg font-light leading-loose">{description}</p>
                </div>
                <button className="w-40 h-12 bg-yellow text-primarycolor rounded-2xl">Get started</button>
            </article>
            <article className="w-500 h-446 bg-secondarycolor rounded-2xl">
                <img src={image} className="w-full h-full" />
            </article>
        </div >

    )
}

Hero.propTypes = {
    content: PropTypes.object.isRequired
}

export default Hero;