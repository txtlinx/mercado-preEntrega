import { BsSpeedometer } from 'react-icons/bs';
import '../../src/Component/CartWidget.css';

function CartWidget() {
  return (
    <a href="/" className="cart">
      <BsSpeedometer className="icon" />
      <span className="badge">12</span>
    </a>
  );
}

export default CartWidget;

