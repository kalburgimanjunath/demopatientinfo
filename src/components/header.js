function Search() {
  return (
    <div>
      <input
        type="search"
        className="border-2 rounded-md p-1"
        placeholder="search for anything.. "
      />
    </div>
  );
}
export default function Header() {
  return (
    <div className="header">
      <Search />
      <div className="p-2 flex mr-2 pr-2">
        <span>Mr.Dragon</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
