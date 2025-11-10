type Props = {
  item: {
    name: string;
    quantity: number;
  };
};

const MenuItem = ({ item }: Props) => {
  return (
    <li className="flex gap-4 justify-between">
      <h2>{item.name}</h2>
      <span>{item.quantity}</span>
    </li>
  );
};

export default MenuItem;
