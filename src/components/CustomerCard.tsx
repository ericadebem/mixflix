export const CustomerCard = ({ data }) => {
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.age}</p>
    </div>
  );
};
