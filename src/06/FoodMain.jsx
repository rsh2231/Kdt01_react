import FoodCard from "./FoodCard"
import FoodData from "../06/fooddata.json"

export default function FoodMain() {

    let tags = FoodData.map(item => <FoodCard key={item["사업장명"]}    // FoodCard 컴포넌트에 FoodData props로 전달
                                                obj={item}/>);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
       {tags}
    </div>
  )
}