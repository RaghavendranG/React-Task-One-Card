// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <FreeCard />
      <PlusCard />
      <ProCard />
    </div>
  );
}

export default App;

//Free-Card component
function FreeCard() {
  return (
    <div className="card">
      <h4 className="title">free</h4>
      <p className="priceTag">
        <span className="price">$0</span>
        <span className="period">/month</span>
      </p>
      <hr />
      <div className="card-content">
        <ul className="content">
          <li className="list-active">
            <span>Single User</span>
          </li>
          <li className="list-active">
            <span>5GB Storage</span>
          </li>
          <li className="list-active">
            <span>Unlimited Public Projects</span>
          </li>
          <li className="list-active">
            <span>Community Access</span>
          </li>
          <li className="list-inactive">
            <span>Unlimited Private Projects</span>
          </li>
          <li className="list-inactive">
            <span>Dedicated Phone Support</span>
          </li>
          <li className="list-inactive">
            <span>Free Subdomain</span>
          </li>
          <li className="list-inactive">
            <span>Monthly Status Reports</span>
          </li>
        </ul>
        <button className="btn">button</button>
      </div>
    </div>
  );
}

//Plus-Card component
function PlusCard() {
  return (
    <div className="card">
      <h4 className="title">plus</h4>
      <p className="priceTag">
        <span className="price">$9</span>
        <span className="period">/month</span>
      </p>
      <hr />
      <div className="card-content">
        <ul className="content">
          <li className="list-active">
            <span>5 Users</span>
          </li>
          <li className="list-active">
            <span>50GB Storage</span>
          </li>
          <li className="list-active">
            <span>Unlimited Public Projects</span>
          </li>
          <li className="list-active">
            <span>Community Access</span>
          </li>
          <li className="list-active">
            <span>Unlimited Private Projects</span>
          </li>
          <li className="list-active">
            <span>Dedicated Phone Support</span>
          </li>
          <li className="list-active">
            <span>Free Subdomain</span>
          </li>
          <li className="list-inactive">
            <span>Monthly Status Reports</span>
          </li>
        </ul>
        <button className="btn">button</button>
      </div>
    </div>
  );
}

//Pro-Card component
function ProCard() {
  return (
    <div className="card">
      <h4 className="title">pro</h4>
      <p className="priceTag">
        <span className="price">$49</span>
        <span className="period">/month</span>
      </p>
      <hr />
      <div className="card-content">
        <ul className="content">
          <li className="list-active">
            <span>Unlimited Users</span>
          </li>
          <li className="list-active">
            <span>150GB Storage</span>
          </li>
          <li className="list-active">
            <span>Unlimited Public Projects</span>
          </li>
          <li className="list-active">
            <span>Community Access</span>
          </li>
          <li className="list-active">
            <span>Unlimited Private Projects</span>
          </li>
          <li className="list-active">
            <span>Dedicated Phone Support</span>
          </li>
          <li className="list-active">
            <span>
              <b>Unlimited</b> Free Subdomains
            </span>
          </li>
          <li className="list-active">
            <span>Monthly Status Reports</span>
          </li>
        </ul>
        <button className="btn">button</button>
      </div>
    </div>
  );
}
