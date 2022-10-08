interface SelectProps {
  defaultList: string;
  name?: string;
  options: string[];
  value: string;
  onChange: (event: any) => void;
}

const Select = ({
  defaultList,
  options,
  value,
  name,
  onChange,
}: SelectProps): JSX.Element => {
  return (
    <select
      className="input py-4 px-5 w-full"
      value={value}
      onChange={onChange}
      name={name}
    >
      <option value="">{defaultList}</option>
      {options.map((data, index) => {
        return (
          <option value={data} key={index}>
            {data}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
