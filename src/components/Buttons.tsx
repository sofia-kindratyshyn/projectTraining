export default function Buttons() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen p-6">
        <h2 className="text-4xl mb-5">Buttons</h2>
        <div className="flex gap-3.5 mb-10 flex-wrap">
          <button className="bg-[#0B64F4] btn-animation text-white btn hover:bg-[#0950C3]">
            Primary
          </button>
          <button className="outline-[1px] outline-[#5492F7] text-[#5492F7] btn-animation hover:outline-4 hover:outline-[#B6D0FC] btn">
            Secondary
          </button>

          <button className="bg-[#617079] btn-animation text-white btn hover:outline-4 hover:outline-[#E6E8EB]">
            Disabled
          </button>
        </div>
        <h2 className="text-4xl mb-5">Badge</h2>
        <div className="flex gap-2">
          <span className=" bg-[#2A9865] border-[#18774C] transition-all duration-200 ease-in-out hover:bg-[#18774C] begie text-white">
            Pro
          </span>
          <span className=" bg-gray-400 border-base-primary-disabled begie transition-all duration-200 ease-in-out hover:bg-base-primary-disabled text-white">
            Free
          </span>
        </div>
      </div>
    </>
  );
}
