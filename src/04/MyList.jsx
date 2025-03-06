import MyListItem from "./MyListItem"
import MyLIstData from "./MyListData.json"
export default function MyList() {

    let tags = MyLIstData.map(item => <MyListItem key={item.title} title={item.title} imgUrl={item.imgUrl} content={item.content}/>)

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 px-10 lg:px-2">
      {tags}
    </div>
  )
}