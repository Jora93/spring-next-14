'use client'
import dynamic from 'next/dynamic'
const PartnerWidget = dynamic(() => import('../../dist/widgets/elements'), {
  ssr: false,
})
export default function Home() {
  return (
    <div>
      <h1>home</h1>
      <PartnerWidget alias={'sportsbook'}/>
    </div>
  );
}
