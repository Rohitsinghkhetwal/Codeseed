import Ellips from "../photos/Ellipse 2.jpg";
import SC1 from "../photos/SC1.jpg";

import Img3 from "../photos/img3.jpg";
import Img4 from "../photos/img4.jpg";
import Img5 from "../photos/img5.jpg";
import Img6 from "../photos/img6.jpg";
import Img7 from "../photos/img7.jpg";
import Img8 from "../photos/img8.jpg";


const Footer = () => {
  return (
    <>
      <div className="pt-[50px]">
        <div className="bg-blue-400 w-[80%] h-[250px]">
          <div className="flex items-center justify-center p-[50px]">
            <p className="text-white font-bold text-[23px]">
              "The customized package from Seedtree was exactly what I needed to
              <br />
              bring my version to life. I'm thrilled with my home design!
            </p>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="bg-blue-400">
              <img
                src={Ellips}
                alt="img"
                height={"80px"}
                width={"80px"}
                className="rounded-[100%]"
              />
            </div>
            <div>
              <p className="pl-[30px] text-white font-bold text-[23px]">
                Allessio Belcastro
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-x-20 items-center justify-center pt-[80px] pb-[50px]">
        <div>
          <h1 className="text-center bg-slate-200 p-[20px] text-[20px]">
            Plaining package
          </h1>
          <img
            src={SC1}
            alt="img"
            height={"300px"}
            width={"300px"}
            className="pt-4"
          />
        </div>
        <div>
          <h1 className="text-center bg-slate-200 p-[20px] text-[20px]">
            Decor package
          </h1>
          <img
            src={SC1}
            alt="img"
            height={"300px"}
            width={"300px"}
            className="pt-4"
          />
        </div>
        <div>
          <h1 className="text-center bg-slate-200 p-[20px] text-[20px]">
            Execution package
          </h1>
          <img
            src={SC1}
            alt="img"
            height={"300px"}
            width={"300px"}
            className="pt-4"
          />
        </div>
      </div>
      <div className="border border-slate-750"></div>

      <div className="flex justify-center items-center pt-[40px] pb-[30px]">
        <div className="bg-blue-400 w-[50%] rounded-xl flex flex-row flex-wrap">
          <div className="px-[30px] py-[30px]">
            <img
              src={Img8}
              alt="img"
              width={"70px"}
              height={"70px"}
              className="rounded-[100%]"
            />
          </div>
          <div className="px-[30px] py-[30px]">
            <img
              src={Img3}
              alt="img"
              width={"70px"}
              height={"70px"}
              className="rounded-[100%]"
            />
          </div>
          <div className="px-[30px] py-[30px]">
            <img
              src={Img4}
              alt="img"
              width={"70px"}
              height={"70px"}
              className="rounded-[100%]"
            />
          </div>
          <div className="px-[30px] py-[30px]">
            <img
              src={Img5}
              alt="img"
              width={"70px"}
              height={"70px"}
              className="rounded-[100%]"
            />
          </div>
          <div className="px-[30px] py-[30px]">
            <img
              src={Img6}
              alt="img"
              width={"70px"}
              height={"70px"}
              className="rounded-[100%]"
            />
          </div>
          <div className="px-[300px] py-[20px] w-full">
            <img
              src={Img7}
              alt="img"
              width={"70px"}
              height={"70px"}
              className="rounded-[100%]"
            />
          </div>
          <div className=" text-center px-[90px] font-bold">
            <h1 className="text-white text-[30px]">Start designing your dream home today.</h1>
            <button className="bg-white px-[25px] py-[10px] rounded-xl my-[20px]">Book Now</button>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Footer