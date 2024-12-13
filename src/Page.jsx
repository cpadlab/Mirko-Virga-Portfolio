import { useEffect, useRef } from 'react'

import { Clients } from "./sections/Clients"
import { About } from "./sections/About"
import { Intro } from "./sections/Banner"
import { Extras } from './sections/Extras'

function Page() {

    const wrapperRef = useRef(null);

    return (
        <>
            <main className="top-0 w-full h-full overflow-y-auto">

                <div ref={wrapperRef} className='shadow-2xl z-10'>

                    <Intro />
                    <Clients />
                    <About />

                </div>

                <Extras />

            </main>
        </>
    )
}

export default Page
