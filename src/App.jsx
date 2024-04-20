import TopBar from './components/TopBar';
import Hero from './components/Hero';

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
        </div>
    )
}

export default App;