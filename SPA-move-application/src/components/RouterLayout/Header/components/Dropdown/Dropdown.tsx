import React, { memo } from 'react';

type Ref = HTMLSelectElement;
interface DropdownInterface {
  id: string;
  name: string;
  listOfOptions: { [key: string]: string }[]; //!here must be added another type to can send components through props
  onChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown = React.forwardRef<Ref, DropdownInterface>(
  ({ id, name, listOfOptions, onChangeHandler }, ref) => (
    <select name={name} id={id} onChange={onChangeHandler} ref={ref}>
      {listOfOptions.map((optionInfo) => (
        <option
          key={`${optionInfo.title}-${optionInfo.path}`}
          value={optionInfo.path}
        >
          {optionInfo.title}
        </option>
      ))}
    </select>
  )
);

const DropDownM = memo(Dropdown);

export default DropDownM;
