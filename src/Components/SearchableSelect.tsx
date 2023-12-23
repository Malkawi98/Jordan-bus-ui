import { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

function SearchableSelect() {

    const [selectedOption, setSelectedOption] = useState(null);
    return (
      <Select
        defaultValue={selectedOption}
        onChange={() => setSelectedOption(selectedOption)}
        options={options}
      />
    );
}

export default SearchableSelect;