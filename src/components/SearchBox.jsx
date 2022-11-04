const SearchBox = ({ changeFilter, filterQuery }) => {
  return (
    <div>
      <input
        type="text"
        onChange={e => {
          changeFilter(e.target.value);
        }}
        value={filterQuery}
      />
    </div>
  );
};

export default SearchBox;
