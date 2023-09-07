import img1 from '../photos/image 1.jpg';
import Ellipse1 from '../photos/Ellipse 1.jpg'
const DesignTree = () => {
  return (
    <>
      <div className="flex justify-between pb-[70px]">
        <div className="pl-[40px] pt-[160px]">
          <h1 className="text-blue-300 text-[65px] font-bold leading-[80px]">
            Design Your dream <br /> home with
            <br />
            Seedtree.
          </h1>
          <p className="text-[20px] text-slate-500 font-light py-[25px]">
            Custom interior design packages
            <br />
            for single rooms or entire homes
            <br /> with expert consultations
          </p>
          <button className="bg-blue-400 text-white px-[60px] py-[15px] rounded-2xl text-[20px] hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-300">
            Book a call
          </button>
          <div className="flex flex-row pt-[40px]">
            <div>
              <img src={Ellipse1} alt="img" />
            </div>
            <div className="pl-[40px] text-[20px]  ">
              <p className="font-bold leading-6">
                "Seedtree made my home renovation
                <br />
                project enjoyable and stress-free. I<br />
                highly recommend thier interior design
                <br />
                services to anyone looking for an expert
                <br />
                desig plan"
                <br />
                David Greene
              </p>
            </div>
          </div>
        </div>
        <div className="pt-[60px]">
          <img src={img1} alt="img" width={"800px"} height={"500px"} />
        </div>
      </div>
      <div className="border border-slate-750"></div>
    </>
  );
}

export default DesignTree   