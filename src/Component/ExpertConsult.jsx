import img2 from "../photos/image 2.jpg";
import img3 from "../photos/image 3.jpg";
import img4 from "../photos/image 4.png";
const ExpertConsult = () => {
  return (
    <>
      <div className="flex flex-row pt-[80px]">
        <div>
          <img src={img2} alt="img" height={"500px"} width={"800px"} />
        </div>
        <div className="flex flex-col items-center justify-center pl-[30px]">
          <h1 className="text-blue-300 text-[50px] font-bold">
            Expert Consultations.
          </h1>
          <p className="text-[25px] leading-[30px] font-medium pt-[29px]">
            Our experienced interior designers will work
            <br />
            with you to create a personalized design plan
            <br />
            tailored to your unique needs and style.
          </p>
        </div>
      </div>

      <div className="flex justify-between pt-[200px]">
        <div className="flex flex-col items-center justify-center pl-[90px]">
          <div>
            <h1 className="text-blue-300 text-[50px] font-bold">
              Customized packages.
            </h1>
          </div>
          <div>
            <p className="text-[25px] leading-[30px] font-medium pt-[29px]">
              Choose from a range of custom pakage that
              <br />
              fit your needs , from single room design services
              <br />
              to full house design plans
            </p>
          </div>
        </div>
        <div>
          <img src={img3} alt="img" height={"600px"} width={"800px"} />
        </div>
      </div>

      <div className="flex flex-row pt-[200px] pb-[40px]">
        <div>
          <img src={img4} alt="img" height={"500px"} width={"800px"} />
        </div>
        <div className="flex flex-col items-center justify-center pl-[50px]">
          <h1 className="text-blue-300 text-[50px] font-bold">
            Online Platform
          </h1>
          <p className="text-[25px] leading-[30px] font-medium pt-[29px]">
            Take advantage of our online platform
            <br />
            to collaborate remotely with your
            <br />
            designer, share ideas and get real
            <br />
            time feedback on your design project
          </p>
        </div>
      </div>
      <div className="border border-slate-750"></div>
    </>
  );
}

export default ExpertConsult    