export interface Props {
  text: string;
}

export default function ToDo(props: Props) {
  return (
    <li className="flex justify-between gap-10 text-left  py-5">
      <p>{props.text}</p>
      <button className="w-5 bg-red-600 rounded-sm"> X </button>
    </li>
  );
}
