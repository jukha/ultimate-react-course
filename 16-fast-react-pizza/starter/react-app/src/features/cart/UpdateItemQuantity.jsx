import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQty, increaeseItemQty } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQty }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseItemQty(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQty}</span>
      <Button type="round" onClick={() => dispatch(increaeseItemQty(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
