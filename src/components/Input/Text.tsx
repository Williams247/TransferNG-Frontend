import "./styles.scss";

interface Props {
  placeholder: string;
  type: string;
  value: string | number;
  defaultValue?: string | number;
  name?: string;
  onChange: (event: any) => void;
}

const Text = ({
  placeholder,
  type,
  value,
  name,
  defaultValue,
  onChange,
}: Props): JSX.Element => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="input py-4 px-5 w-full"
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default Text;
