import { Text } from "./styles";

interface Props {
  name: string;
}
export default function CategoryText(props: Props) {
  const { name } = props;

  return <Text>{name}</Text>;
}
