
export const ExtraCard = ({ link, text, id }) => {
    return (
        <a className={`group block py-4 text-2xl text-black leading-none font-normal lowercase no-underline first-letter:uppercase ${id !== 4 ? 'border-b-2 border-b-black' : ''} flex items-center gap-4`} target='_blank' href={link}>
            <svg className="sm:block hidden w-4 h-4 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><path d="m100 0 5.94 94.06L200 100l-94.06 5.94L100 200l-5.94-94.06L0 100l94.06-5.94L100 0Z"></path></svg>
            <span className="first-letter:uppercase group-hover:pl-[2rem] transition-all duration-200">{text}</span>
        </a>
    )
}
