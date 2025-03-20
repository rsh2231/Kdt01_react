export default function TailSelect({ id, selectRef, gugun, handleChange }) {
  return (
    <form className="max-w-sm mx-auto">
      <select
        id={id}
        ref={selectRef}
        onChange={handleChange}
        className="block w-full text-lg text-gray-700 bg-white border-2 border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-indigo-500 focus:outline-none appearance-none py-3 px-4 mb-4"
      >
        <option value="" disabled className="text-gray-400">
          구/군 선택
        </option>
        {gugun.map((region) => (
          <option 
          key={region} 
          value={region} 
          className="text-gray-700">
            {region}
          </option>
        ))}
      </select>
    </form>
  );
}
