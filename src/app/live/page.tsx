'use client'

import dynamic from 'next/dynamic'

// const PartnerWidget = dynamic(() => import('../../../dist/widgets/elements'), {
//     ssr: false,
// })

const DynamicSportsbook = dynamic(() => import('../../../dist/widgets/elements/Sportsbook/Sportsbook.public'), {
    loading: () => <p>Loading...</p>, ssr: false
})
  

export default async function Live() {
    // const data = await getCommentsData();

    // console.log(data)

    return <div>
        <h1>Live</h1>
        <DynamicSportsbook/>
    </div>
    
}