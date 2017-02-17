let App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList list={['Banana', 'Milk', 'Chicken']}/>
  </div>
);

let GroceryList = (props) => (
  <ul>
    {props.list.map(item => 
      <GroceryListItem item={item}/>
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      hovered: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onMouseOver() {
    this.setState({
      hovered: true
    });
  }

  onMouseOut() {
    this.setState({ 
      hovered: false
   });
 }

  render() {
    let style = {
      textDecoration: this.state.done? 'line-through' : 'none',
      fontWeight: this.state.hovered? 'bold' : 'none'
    };
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}>{this.props.item}</li>
    );
  }

}

ReactDOM.render(<App/>, document.getElementById('app'));