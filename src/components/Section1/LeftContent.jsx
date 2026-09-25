import React from 'react'

const LeftContent = () => {
  return (
  <section className="min-h-screen px-8 py-16">

  <div className="mx-auto flex max-w-6xl items-center justify-between">

    {/* LEFT CONTENT */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center items-start ">
      
<h1 className="whitespace-nowrap text-5xl font-bold leading-tight text-[#2d3748]">
  Hi, I'm{" "}
  <span className="text-[#19c7f3]">
    React Specialist
  </span>
</h1> 
      <p className="mt-3 max-w-xl text-1xl leading-6 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        I build modern and responsive web applications.
      </p>

     <div className="mt-7 flex gap-5">

  <button className="rounded-full bg-[#19c7f3] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-cyan-200">
    Resume
  </button>

  <button className="rounded-full border-2 border-[#19c7f3] bg-white px-8 py-4 text-sm font-semibold text-[#19c7f3]">
    Contact Me
  </button>

</div>

    </div>

    {/* RIGHT IMAGE — we'll do this next */}
    <div className="hidden w-1/2 lg:flex">
      {/* image */}
    </div>

  </div>

</section>
  )
}

export default LeftContent

