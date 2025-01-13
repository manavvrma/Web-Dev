function List() {
  const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

  const listItems = fruits.map((fruit) => <li>{fruit}</li>);

  return <ol>{listItems}</ol>;
}

export default List;
