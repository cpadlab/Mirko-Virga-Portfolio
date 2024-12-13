import videoData from '../assets/data/videos.json'
import { ExtraCard } from './components/ExtraCard'

export const Extras = () => {
    return (
        <section className='bg-white py-12'>

            <div className='mx-auto w-[90%] border-b-2 border-b-black py-4'>
                <h1 className='text-2xl text-black leading-none font-normal uppercase'>Extras</h1>
            </div>

            <div className='flex w-[90%] mx-auto border-b-2 border-b-black sm:gap-0 gap-4 sm:grid sm:grid-cols-2'>
                <div className='pt-4 border-r-2 sm:border-r-0 border-r-black pr-4 max-[640px]:flex max-[640px]:items-center'>
                    <h2 className='text-4xl text-black leading-none font-normal uppercase max-[640px]:vertical-text'>Latest Videos</h2>
                </div>
                <div className=''>
                    {videoData.slice(0, 5).map((video, index) => (
                        <ExtraCard key={index} link={video.link} text={video.title} id={index} />
                    ))}
                </div>
            </div>

            <div className='grid sm:grid-cols-2 grid-cols-1 w-[90%] mx-auto border-b-2 border-b-black'>
                <div className='pt-4 sm:block hidden'>
                    <h2 className='text-4xl text-black sm:text-left leading-none font-normal uppercase '>Social Media</h2>
                </div>
                <div>
                    <a className='flex items-center gap-4 group py-4 text-2xl text-black leading-none font-normal lowercase no-underline first-letter:uppercase border-b-2 border-b-black' target='_blank' href="https://www.youtube.com/c/MirkoVigna">
                        <svg className="w-4 h-4 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><path d="m100 0 5.94 94.06L200 100l-94.06 5.94L100 200l-5.94-94.06L0 100l94.06-5.94L100 0Z"></path></svg>
                        <span className="first-letter:uppercase group-hover:pl-[2rem] transition-all duration-200">YouTube</span>
                    </a>
                    <a className='flex items-center gap-4 group py-4 text-2xl text-black leading-none font-normal lowercase no-underline first-letter:uppercase border-b-2 border-b-black' target='_blank' href="https://www.instagram.com/mirkovgna">
                        <svg className="w-4 h-4 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><path d="m100 0 5.94 94.06L200 100l-94.06 5.94L100 200l-5.94-94.06L0 100l94.06-5.94L100 0Z"></path></svg>
                        <span className="first-letter:uppercase group-hover:pl-[2rem] transition-all duration-200">Instagram</span>
                    </a>
                    <a className='flex items-center gap-4 group py-4 text-2xl text-black leading-none font-normal lowercase no-underline first-letter:uppercase' target='_blank' href="https://tiktok.com/@mirkovgna">
                        <svg className="w-4 h-4 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><path d="m100 0 5.94 94.06L200 100l-94.06 5.94L100 200l-5.94-94.06L0 100l94.06-5.94L100 0Z"></path></svg>
                        <span className="first-letter:uppercase group-hover:pl-[2rem] transition-all duration-200">TikTok</span>
                    </a>
                </div>
            </div>

            <div className='grid sm:grid-cols-2 grid-cols-1 w-[90%] mx-auto border-b-2 border-b-black'>
                <div className='pt-4 sm:block hidden'>
                    <h2 className='text-4xl text-black sm:text-left leading-none font-normal uppercase '>Contact</h2>
                </div>
                <div>
                    <a className='flex items-center gap-4 group py-4 text-2xl text-black leading-none font-normal lowercase no-underline' target='_blank' href="mailto:jordi@koalitickollective.com">
                        <svg className="w-4 h-4 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><path d="m100 0 5.94 94.06L200 100l-94.06 5.94L100 200l-5.94-94.06L0 100l94.06-5.94L100 0Z"></path></svg>
                        <span className="first-letter:uppercase group-hover:pl-[2rem] transition-all duration-200">jordi@koalitickollective.com</span>
                    </a>
                </div>
            </div>
            
        </section>
    )
}
