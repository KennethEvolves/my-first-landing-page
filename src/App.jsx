import { Features, Footer, Hero, Logos, ProductImage, TopBar, UserFeedback } from "./components";


const App = () => {
    return (
        <div className="h-full flex flex-col items-center font-display bg-primarycolor text-white">
            <TopBar />
            <Hero content={{
                image: 'header.png',
                title: 'SaaS Landing',
                title2: 'Page Template',
                description: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com'
            }} />
            <Logos />
            <ProductImage />
            <Features />
            <UserFeedback />
            <Hero content={{
                image: 'gif.png',
                title: 'Questions?',
                title2: "Let's talk",
                description: 'Contact us through our 24/7 live chat. Were always happy to help!',
            }} />
            <Footer />
        </div>
    )
}

export default App;