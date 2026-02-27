import { Quote } from "lucide-react";

const QUOTES_DATA = [
  {
    id: 1,
    text: "The most complete gift of God is a life based on knowledge.",
    author: "Imam Ali (AS)"
  },
  {
    id: 2,
    text: "Do not let your difficulties fill you with anxiety, after all it is only in the darkest nights that stars shine more brightly.",
    author: "Imam Ali (AS)"
  },
  {
    id: 3,
    text: "A person's intellect is not complete until it has various qualities: disbelief and evil are not expected from him.",
    author: "Imam Hussain (AS)"
  }
];

const Quats = () => {
  return (
    <div className="bg-gray-900 my-5 p-6 border border-gray-800 rounded-lg w-full">
      <h2 className="mb-6 font-bold text-white text-2xl flex items-center gap-2">
        <Quote className="text-gray-400" size={24} /> Inspire Daily
      </h2>

      <div className="space-y-4">
        {QUOTES_DATA.map((quote) => (
          <div
            key={quote.id}
            className="bg-gray-800/50 p-4 border border-gray-700 hover:border-gray-600 rounded-lg transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
              <div className="flex-1">
                <p className="mb-2 text-gray-300 italic text-sm md:text-base leading-relaxed">
                  "{quote.text}"
                </p>
                <div className="flex justify-end mt-2">
                  <span className="text-gray-400 font-medium text-xs md:text-sm">
                    — {quote.author}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quats;
