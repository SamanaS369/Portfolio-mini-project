import profile from "../../assets/images/profile.jpg";
const RightContent = () => {
  return (
    <div className="flex w-full items-center justify-center lg:w-1/2">

      {/* Main image area */}
      <div className="relative -translate-y-8 flex h-89 w-89 items-center justify-center">

        {/* Outer dashed circle */}
        <div className="absolute h-85 w-85 rounded-full border border-dashed border-[#19c7f3]/40" />

        {/* Light blue circle */}
        <div className="absolute h-77.5 w-77.5 rounded-full bg-cyan-100/50" />

        {/* Main circle */}
        <div className="relative flex h-71.25 w-71.25 items-center justify-center overflow-hidden rounded-full border-4 border-[#19c7f3] bg-white shadow-[0_0_40px_rgba(25,199,243,0.3)]">

          <img
            src={profile}
            alt="Profile"
            className="h-[92%] w-[92%] object-contain"
          />

        </div>

        {/* Decorative icons */}
        <div className="absolute right-0 top-8 rounded-lg bg-blue-500 px-3 py-2 text-white shadow-md">
          JS
        </div>

        <div className="absolute left-0 top-24 text-3xl text-[#19c7f3]">
          ⚡
        </div>

        <div className="absolute bottom-8 left-8 rotate-12 rounded-lg bg-yellow-300 px-3 py-2 text-white shadow-md">
          JS
        </div>

        <div className="absolute bottom-4 right-5 rounded-lg bg-green-200 px-3 py-2 text-green-600 shadow-md">
          $
        </div>

      </div>

    </div>
  );
};

export default RightContent;