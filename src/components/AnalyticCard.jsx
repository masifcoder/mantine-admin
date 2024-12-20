

const AnalyticCard = ({data}) => {
  return (
    <div className={`rounded-md p-5`} style={{ backgroundColor: data.bgColor }}>
        <h2 className='text-3xl text-center font-bold mb-3'>{data.line1}</h2>
        <h5 className='text-center font-bold mb-2'>{data.line2}</h5>
        <p className='text-slate-500 text-center'>{data.line3}</p>
    </div>
  )
}

export default AnalyticCard