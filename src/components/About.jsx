import './style/About.css'
import Footer from './Footer'


export default function About() {

    return (
        <>
            <div className='about--main-container'>
                <div className='about--sub-container'>
                    <div className='about--title'>
                        About Weather Today
                    </div>
                    <div className='about--web-desc'>
                        At Weather Today site, we are dedicated to keeping you informed about the latest weather conditions in your city. Our mission is to provide accurate and up-to-date weather reports, ensuring you're always prepared for the day ahead.
                    </div>
                    <div className='about--title'>
                        Features
                    </div>
                    <div className='about--features-container'>
                        <div className='about--feature-container'>
                            <div className='about--feature-title'>
                                Hourly Reports
                            </div>
                            <div className='about--feature-desc'>
                                Stay ahead of the day with our hourly updates. We provide a snapshot of weather conditions at crucial intervals, so you're always prepared.
                            </div>
                        </div>
                        <div className='about--feature-container'>
                            <div className='about--feature-title'>
                                7-Day Forecast
                            </div>
                            <div className='about--feature-desc'>
                            Plan your week confidently with our 7-day forecast. We offer a glimpse into the future, helping you make informed decisions about your upcoming activities.
                            </div>
                        </div>
                        <div className='about--feature-container'>
                            <div className='about--feature-title'>
                                Global Coverage
                            </div>
                            <div className='about--feature-desc'>
                                Whether you're in a bustling metropolis or a serene countryside, Weather Today covers any city you want. Simply input the location, and we'll deliver the most relevant weather data for your chosen area.
                            </div>
                        </div>
                        <div className='about--feature-container'>
                            <div className='about--feature-title'>
                                Comprehensive Weather Conditions
                            </div>
                            <div className='about--feature-desc'>
                                Beyond temperature, we provide information on humidity, wind speed, and atmospheric pressure. Our goal is to give you a holistic understanding of the weather around you.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}