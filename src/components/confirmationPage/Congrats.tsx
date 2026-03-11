const Congrats = () => {
  return (
    <>
        <p className="text-[30px]/8 text-center font-extrabold mb-6">Congrats, 
            <span className="bg-linear-to-r from-Orange-500 to-Neutral-0 bg-clip-text text-transparent"> Jonathan</span> 
            <span className="bg-linear-to-r from-Orange-500 to-Neutral-0 bg-clip-text text-transparent"> Kirstof! </span> 
            Your ticket is ready.</p>
        <p className="text-[19px] text-center mb-20 text-Neutral-300">
            We've emailed your ticket to
            <span className="text-Orange-500"> jonathan@email.com </span>
            and will send updates in the run up to the event.</p>
    </>
  )
}

export default Congrats