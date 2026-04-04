import React from "react";

interface NavigationButtonsProps {
  next: () => void;
  prev: () => void;
  currentPage?: number;
  totalPages?: number;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  next,
  prev,
  currentPage,
  totalPages,
}) => {
  return (
    <div className="relative w-full flex items-center justify-between px-4 py-2">
      <button
        onClick={prev}
        disabled={currentPage !== undefined && currentPage <= 1}
        className="bg-gray-700 text-white px-4 py-2 rounded disabled:opacity-50 hover:bg-gray-800 transition"
      >
        Previous
      </button>

      {currentPage && totalPages && (
        <span className="text-gray-700 font-medium">
          {currentPage} / {totalPages}
        </span>
      )}

      <button
        onClick={next}
        disabled={currentPage !== undefined && totalPages !== undefined && currentPage >= totalPages}
        className="bg-purple-600 text-white px-4 py-2 rounded disabled:opacity-50 hover:bg-purple-700 transition"
      >
        Next
      </button>
    </div>
  );
};

export default NavigationButtons;