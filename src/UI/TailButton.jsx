
export default function TailButton({caption, color, onClick}) {
const bg = {
    "blue" : "bg-blue-700",
    "oragne" : "bg-orange-700",
    "lime" : "bg-lime-700",
}

const bgHover = {
    "blue" : "hover:bg-blue-400",
    "oragne" : "hover:bg-orange-400",
    "lime" : "hover:bg-lime-400",
}
  return (
    <button className={`px-4 py-2 mx-2 text-lg hover:font-bold
                    rounded-md text-white
                    ${bg[color]} ${bgHover[color]}`}
                     onClick={onClick}>
            {caption}
    </button>
  )
}
  