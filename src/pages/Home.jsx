import React from 'react'
import AnalyticCard from '../components/AnalyticCard';
import PostsChart from '../components/PostsChart';
import ViewsChart from '../components/ViewsChart';

function Home() {

  const AnalyticalCardData = [
    { line1: "200k", line2: "Last seven days visits", line3: "10% incresase from last 7 days.", bgColor: '#eefefd' },
    { line1: "4.5K", line2: "Demos sheduled", line3: "12% incresase from last week.", bgColor: '#ffeeef' },
    { line1: "1.5k", line2: "New posts scheduled", line3: "15% incresase from last 7 days.", bgColor: '#f2e8ff' },
    { line1: "1.2k", line2: "Comments on posts", line3: "20% incresase from last week.", bgColor: '#eefaee' }
  ];
  return (
    <div>
      <h2 className='mb-5 font-bold text-3xl'>Blog Dashboard</h2>

      {/* Analytical cards */}
      <div className='grid grid-cols-4 gap-5 mb-5'>
        {
          AnalyticalCardData.map((data, index) => {
            return <AnalyticCard data={data} />
          })
        }
      </div>

      {/* dashbard charts */}
      <div className='grid grid-cols-[2fr_1fr] gap-4'>
          <PostsChart />
          <ViewsChart />
      </div>


    </div>
  )
}

export default Home