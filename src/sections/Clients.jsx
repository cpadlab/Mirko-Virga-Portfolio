
import { ClientsCard } from './components/ClientsCard'
import data from '../assets/data/projects.json'

export const Clients = () => {

    return (
        <section className='bg-black pt-[25vh]'>
            
            <div className='mx-auto w-[90%] border-b-2 py-4'>
                <h1 className='text-2xl text-white leading-none font-normal uppercase'>Clients</h1>
            </div>
            <div className='mx-auto w-[90%]'>
                {data.map((project, index) => (
                    <ClientsCard key={index} title1={project.title1} title2={project.title2} image={project.image} />
                ))}
            </div>
            
        </section>
    )
}



