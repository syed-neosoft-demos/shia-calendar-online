import { Quote } from "lucide-react";

const QUOTES_DATA = [
  {
    id: 1,
    text: "The most complete gift of God is a life based on knowledge.",
    author: "Imam Ali (AS)",
  },
  {
    id: 2,
    text: "Do not let your difficulties fill you with anxiety, after all it is only in the darkest nights that stars shine more brightly.",
    author: "Imam Ali (AS)",
  },
  {
    id: 3,
    text: "A person's intellect is not complete until it has various qualities: disbelief and evil are not expected from him.",
    author: "Imam Hussain (AS)",
  },
];

const Quats = () => {
  return (
    <div className="mb-6">
      <div className="bg-gray-900 my-5 p-6 border border-gray-800 rounded-lg w-full">
        <h2 className="flex items-center gap-2 mb-6 font-bold text-white text-2xl">
          <Quote className="text-gray-400" size={24} /> Inspire Daily
        </h2>

        <div className="space-y-4">
          {QUOTES_DATA.map((quote) => (
            <div
              key={quote.id}
              className="bg-gray-800/50 p-4 border border-gray-700 hover:border-gray-600 rounded-lg transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 bg-blue-400 mt-2 rounded-full w-2 h-2" />
                <div className="flex-1">
                  <p className="mb-2 text-gray-300 text-sm md:text-base italic leading-relaxed">
                    "{quote.text}"
                  </p>
                  <div className="flex justify-end mt-2">
                    <span className="font-medium text-gray-400 text-xs md:text-sm">
                      — {quote.author}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-900 my-5 p-6 border border-gray-800 rounded-lg w-full">
        {/* <h2 className="flex items-center gap-2 mb-6 font-bold text-white text-2xl">
          <Quote className="text-gray-400" size={24} />
          Request
        </h2> */}
        <div className="space-y-4">
          <div className="bg-gray-800/50 p-4 border border-gray-700 hover:border-gray-600 rounded-lg transition-colors">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <p className="mb-2 text-red-300 text-sm md:text-base italic leading-relaxed">
                  Please recite a Surah Al-Fatiha for the soul of my mother
                </p>
                <div className="flex mt-2">
                  <span className="font-medium text-red-200 text-xs md:text-sm">
                    Syeda Naaz Bibi D/O Syed Lakhte Hasan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quats;
