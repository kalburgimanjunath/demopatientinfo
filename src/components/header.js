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
      <div className="p-2">Mr.Dragon</div>
    </div>
  );
}
