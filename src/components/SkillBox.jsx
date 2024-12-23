


export default function SkillBox({ icon: Icon, num, title, img }) {
    return (
      <>
        <div className={`flex flex-col gap-2 items-center justify-around rounded-[2rem] border border-[#303033] p-[30px] ${num ? "min-w-60" : "min-w-32"}`}>
          {num ? <h2 className="titleColor text-7xl font-bold">{num}</h2> : <img src={img} alt={title} className="w-[120px]" />}
          <p className="text-lg font-bold text-center">{title}</p>
        </div>
      </>
    );
  }
  