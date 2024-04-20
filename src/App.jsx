import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import ProductImage from './components/ProductImage';
import Features from './components/Features';
import UserFeedback from './components/UserFeedback';

const App = () => {
    return (
        <div className="w-full h-full flex flex-col items-center font-display bg-primarycolor text-white">
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
        </div>
    )
}

export default App;