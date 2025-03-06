
export default function TailBall({n}) {
    const bgColor = {
        "n0" : " bg-amber-700",
        "n1" : " bg-emerald-700",
        "n2" : " bg-blue-700",
        "n3" : " bg-fuchsia-700",
        "n4" : " bg-pink-700",
       }
  return (
    <div className= { `w-16 h-16 flex justify-center items-center
                     text-white font-bold text-2xl 
                     p-10 m-2 rounded-full ${bgColor["n" + Math.floor(n / 10)]}`}>
        {n}
    </div>
  )
}
