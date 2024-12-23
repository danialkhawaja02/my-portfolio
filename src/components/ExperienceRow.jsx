

export default function ExperienceRow({year, designation, institute, summary}) {
    return(
        <>
            <div className="flex flex-col md:flex-row gap-5 border-b border-[#303033] py-7">
                <div className="md:w-2/12">{year}</div>
                <div className="md:w-5/12">
                    <h2 className="text-xl font-bold">{designation}</h2>
                    <p>{institute}</p>
                </div>
                <div className="md:w-5/12">
                    <p>{summary}</p>
                </div>
            </div>
        </>
    )
}