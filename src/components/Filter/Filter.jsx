import { Search2Icon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => dispatch(setFilter(e.target.value));

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Search2Icon color="gray.300" />
      </InputLeftElement>
      <Input
        type="text"
        onChange={handleChange}
        variant="flushed"
        required
        placeholder="Search by name"
      />
    </InputGroup>
  );
};

export default Filter;
