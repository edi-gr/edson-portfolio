import React from 'react'

type Props = {}

const Tools = (props: Props) => {
  return (
    <div className='w-10/12 mx-auto' id='tools'>
        <h1 className='md:text-4xl text-3xl lg:text-5xl font-bold'>Tools</h1>
        <p className='pt-6 text-neutral-300'>The products, apps and services I use on a daily basis for work.</p>
        <div className='mt-20 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-10'>
            <a href="https://react.dev/" className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <img className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src="react.jpg" alt="" />
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold'>React</h1>
                    <p className='text-neutral-400'>My primary website development tool</p>
                </div>
            </a>
            <a href="https://nextjs.org/" className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <img className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src="next.png" alt="" />
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold'>Next.js</h1>
                    <p className='text-neutral-400'>Recently migrated to Next.js to take advantage of its performance and SEO benefits.</p>
                </div>
            </a>
            <a href="https://reactnative.dev/" className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <img className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src="react-native.png" alt="" />
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold'>React Native</h1>
                    <p className='text-neutral-400'>Used for building my mobile appplications</p>
                </div>
            </a>
            <a href="https://code.visualstudio.com/" className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <img className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src="vscode.png" alt="" />
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold'>Vs Code</h1>
                    <p className='text-neutral-400'>Used for Most of my developed Apps</p>
                </div>
            </a>
            <a href="https://firebase.google.com/docs/hosting" className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <img className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src="firebase.png" alt="" />
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold'>Firebase</h1>
                    <p className='text-neutral-400'>Used as backend-as-a-service (BaaS)</p>
                </div>
            </a>
            <a href="https://vercel.com/" className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <img className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src="vercel.png" alt="" />
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold'>Vercel</h1>
                    <p className='text-neutral-400'>For deployement purposes</p>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Tools