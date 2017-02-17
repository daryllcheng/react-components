var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList/>
  </div>
);

let GroceryList = () => (
  <ul>
    <Banana/>
    <Milk/>
  </ul>
);

let Banana = () => (
  <li>Banana</li>
);

let Milk = () => (
  <li>Milk</li>
);

ReactDOM.render(<App/>, document.getElementById('app'));