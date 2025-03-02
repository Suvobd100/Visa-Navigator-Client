import MySlider from "./mySlider"

const Hero = ({ title, subtitle }) => {
  return (
    <div
    className=""
    style={{
      backgroundImage: "url(https://i.ibb.co.com/KxP95H5N/bg.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
    }}
  >
    <MySlider/>
      <h1 className="text-xl text-black md:text-2xl lg:text-5xl font-bold mb-4">
      {title}
    </h1>
    <p className="text-xs md:text-base text-black/60 text-center font-semibold">
      {subtitle}
    </p>
    <div className="flex justify-center items-center p-2 ">
      {/* <p className="input input-bordered w-[600px] ">
        <CiSearch className="text-xl" />
        <input
          className="italic text-xl p-4 "
          type="text"
          placeholder=" Speak Japanis like a Spanish"
        />
      </p> */}
    
      <button className="btn w-[400px] bg-stone-300 text-stone-600 text-xl 
      font-semibold rounded-md ">Get Started</button>
    </div>
  </div>
  )
}

export default Hero