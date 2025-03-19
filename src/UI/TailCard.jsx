import { PiSubtitlesDuotone } from "react-icons/pi";

export default function TailCard({ title, subtitle, imgurl, kws }) {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg" src={imgurl} alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {subtitle}
        </p>
        {kws.map((kw) => (
          <a
            key={kw}
            href="#"
            class="inline-flex items-center px-1 py-1 m-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {kw}
          </a>
        ))}
      </div>
    </div>
  );
}
