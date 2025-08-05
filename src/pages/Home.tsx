import type { JSX } from 'react'

export default function Home(): JSX.Element {
    return (
        <div>
            <div className='max-w-6xl'>
                <h1 className='text-6xl font-medium leading-20 md:w-2xl'>We build professional websites that:</h1>
                <div className='mt-6 flex flex-col lg:flex-row gap-4'>
                    <div 
                        className='border border-white/20 rounded-full 
                        text-center px-4 py-2 bg-[#020617]/20 backdrop-blur-lg 
                        font-medium'
                    >
                        🚀 Load FAST
                    </div>
                    <div 
                        className='border border-white/20 rounded-full 
                        text-center px-4 py-2 bg-[#020617]/20 backdrop-blur-lg 
                        font-medium'
                    >
                        📈 Rank HIGH on Google
                    </div>
                    <div 
                        className='border border-white/20 rounded-full 
                        text-center px-4 py-2 bg-[#020617]/20 backdrop-blur-lg 
                        font-medium'
                    >
                        ✨ User Friendly
                    </div>
                    <div 
                        className='border border-white/20 rounded-full 
                        text-center px-4 py-2 bg-[#020617]/20 backdrop-blur-lg 
                        font-medium'
                    >
                        💵 Convert visitors to clients!
                    </div>
                </div>
                <p className='text-xl mt-4'>
                    We combine beautiful design with smart technology to grow your business.
                </p>
            </div>
        </div>
    )
}