// import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Ilustrator', price: '$80.99' },
    { name: 'Adobe XD', price: '$60.99' }
  ];

  const brothers = [
    { name: 'Badhan', age: '28' },
    { name: 'Ratan', age: '22' },
    { name: 'Manik', age: '19' },
    { name: 'Mahin', age: '8' },
    { name: 'Sayan', age: '4' }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        {
          brothers.map(bro => <Brother brother={bro}></Brother>)
        }
      </header>
    </div>
  );
}

function Product(props) {
  const { name, price } = props.product
  const productStyle = {
    border: '1px solid gray',
    height: '200px',
    width: '200px',
    marginBottom: '10px'
  }

  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h4>{price}</h4>
      <button>Buy now</button>
    </div>
  )
}

function Brother(props) {
  const { name, age } = props.brother;
  const brotherStyle = {
    border: '1px solid yellow',
    padding: '5px',
    width: '300px',
    marginBottom: '10px'
  }
  console.log(props)
  return (
    <div style={brotherStyle}>
      <h3>Name: {name}</h3>
      <h5>Age: {age}</h5>
    </div>
  )
}

export default App;
