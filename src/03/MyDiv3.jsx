export default function MyDiv3({mf1, mf2, mf3}) {
  return (
    <div className="w-8/10 h-8/10 flex-col flex bg-lime-500 text-white p-10 text-2xl font-bold ">
        <div className="w-full text-left mb-10">
        {`${mf1} > ${mf2} > ${mf3}`}
        </div>
    </div>
  )
}
