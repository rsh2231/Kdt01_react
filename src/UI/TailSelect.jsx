export default function TailSelect({id, guguns, selRef, handleChange}) {
  return (
    <form className="max-w-sm mx-auto">
      <select
        id={id}
        ref={selRef}
        onChange={handleChange}
        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
      >
        <option value="">구/군 선택</option>
        {guguns.map(item =>
          <option 
          key={item} 
          value={item}>
            {item}
            </option>
        )}
      </select>
    </form>
  );
}
