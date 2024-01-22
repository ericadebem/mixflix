import { Button } from "./Button";
interface ITravelCard {
  from: string;
  timeFrom: number;
  to: string;
  timeTo: number;
  preis: number;
}
interface ITravelCardProps {
  data: ITravelCard;
}
const calculateTravelTime = (timeTo: number, timeFrom: number) => {
  if (timeTo < timeFrom) {
    return timeTo + 24 - timeFrom;
  } else {
    return timeTo - timeFrom;
  }
};
export const TravelCard = ({ data }: ITravelCardProps) => {
  const { from, timeFrom, to, timeTo, preis } = data;
  return (
    <div>
      <p>{timeFrom}</p>
      <p>{from}</p>
      <p>{calculateTravelTime(timeTo, timeFrom)}</p>
      <p>1 Unstieg</p>
      <p>{timeTo}</p>
      <p>{to}</p>
      <p>{preis}</p>
      <Button text={"weiter"} />
    </div>
  );
};
