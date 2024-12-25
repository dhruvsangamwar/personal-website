import Link from 'next/link'

export default function projects() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
               Projects 
            </h1>

            <div className="mb-8 font-semibold">
            <Link href="https://github.com/dhruvsangamwar/placekittens">Placekittens</Link>
                <p className="mb-4 font-light">
                    The famously sunet placekittens.com was a famous API that served cat images. I made a clone of it using Go.
                </p>
            </div>
 
            <div className="mb-8 font-semibold">
            <Link href="https://github.com/ThaumicMekanism/calhacks-2023">Flash Card Generator</Link>
                <p className="mb-4 font-light">
                    CalHacks 2023: Automated Flash Card generation powered by GPT-4 to help students study.
                </p>
            </div>

             <div className="mb-8 font-semibold">
            <Link href="https://github.com/ResilientEcosystem/rust_sdk">ResDB Rust SDK</Link>
                <p className="mb-4 font-light">
                    Wrote a user friendly SDK in Rust for ResilientDB, an open source Blockchain fabric currently going through Apache incubation.
                </p>
            </div> 

            <div className="mb-8 font-semibold">
            <Link href="https://caneurotech.netlify.app">Neurotech Conference Website</Link>
                <p className="mb-4 font-light">
                    Designed and implemented the 2024 California Neurotech Conference which was hosted by UC Davis.
                </p>
            </div>

            <div className="mb-8 font-semibold">
            <Link href="https://neurotechwiki.netlify.app">Neurotech Wiki</Link>
                <p className="mb-4 font-light">
                    Developed and maintained the only open source Neurotechnology Wiki. Serves as a knowledge hub for current
                    and future Neurotech@Davis members. 
                </p>
            </div>

            <div className="mb-8 font-semibold">
            <Link href="https://github.com/dhruvsangamwar/Pomodoro-App">Pomodoro</Link>
                <p className="mb-4 font-light">
                    A simple task based timer app that uses the pomodoro method of study. Implemented using SwiftUI.
                </p>
            </div>
        </section>
    )
}