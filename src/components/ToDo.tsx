export interface Props {
  text: string;
}

export default function ToDo(props: Props) {
  return (
    <li className="flex justify-center gap-10 text-left pr-10 py-5">
      <p>{props.text}</p>
      <button className="w-5 bg-red-600"> X </button>
    </li>
  );
}
