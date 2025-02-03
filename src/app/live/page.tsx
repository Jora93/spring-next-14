'use client'

// import { List } from "@/components/List";

import dynamic from 'next/dynamic'

// const DynamicClock = dynamic(() => import('../../../dist/widgets/elements/Clock/Clock.public'), {
//     loading: () => <p>Loading...</p>, ssr: false
//   })

// const DynamicSportsbook = dynamic(() => import('../../../dist/widgets/elements/Sportsbook/Sportsbook.public'), {
//     loading: () => <p>Loading...</p>, ssr: false
// })
// const DynamicEvents = dynamic(() => import('../../../dist/widgets/elements/Events/Events.public'), {
//     loading: () => <p>Loading...</p>, ssr: false
// })

const PartnerWidget = dynamic(() => import('../../../dist/widgets/elements'), {
    ssr: false,
})

// import { Suspense } from 'react'
// import { Layout } from '@/app/live/layout'


// const getCommentsData = async () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('data fetched')
//         }, 2000)
//     })
//   };
  

export default async function Live() {
    // const data = await getCommentsData();

    // console.log(data)

    return <div>
        <h1>Live</h1>
        {/* <PartnerWidget alias={'spEvents'} /> */}
        <PartnerWidget alias={'sportsbook'}/>
        {/* <PartnerWidget alias={'spClock'}/> */}
        {/* <PartnerWidget alias={'spClock'}/> */}
    </div>
    
}