import React from 'react'

const LeftContent = () => {
  return (
  <section className="min-h-screen px-8 py-16">

  <div className="mx-auto flex max-w-6xl items-center justify-between">

    {/* LEFT CONTENT */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
      
      <p className="text-lg font-semibold text-gray-800">
        Hi, I'm
        <span className="ml-2 text-blue-500">
          React Specialist
        </span>
      </p>

      <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        I build modern and responsive web applications.
      </p>

      <div className="mt-6 flex gap-4">
        <button className="rounded-full bg-blue-500 px-6 py-3 text-white">
          My Resume
        </button>

        <button className="rounded-full border-2 border-blue-500 px-6 py-3 text-blue-500">
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

