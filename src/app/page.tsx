'use client'
import dynamic from 'next/dynamic'
// const PartnerWidget = dynamic(() => import('../../dist/widgets/elements'), {
//   ssr: false,
// })

const DynamicSportsbook = dynamic(() => import('../../dist/widgets/elements/Sportsbook/Sportsbook.public'), {
    loading: () => <p>Loading...</p>, ssr: false
})
export default function Home() {
  return (
    <div>
      <h1>home</h1>
      <DynamicSportsbook/>
    </div>
  );
}
