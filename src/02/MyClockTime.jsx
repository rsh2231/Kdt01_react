function MyClockTime() {
    return (
    <div className="text-2xl font-bold m-10">
      현재시각 : {new Date().toLocaleTimeString()}
      </div>
    )
  }
  export default MyClockTime;
  