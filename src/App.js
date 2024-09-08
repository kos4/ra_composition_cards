import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from "./components/Card";
import { faker } from '@faker-js/faker';

export default function App() {
  return (
    <div className="container">
      <Card imageUrl={faker.image.urlLoremFlickr()}>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
          card's
          content.</p>
        <a href="https://localhost" className="btn btn-primary">Go somewhere</a>
      </Card>
      <Card>
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="https://localhost" className="btn btn-primary">Go somewhere</a>
      </Card>
    </div>
  );
}
