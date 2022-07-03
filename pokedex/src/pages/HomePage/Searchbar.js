import React from 'react';
import Button from '@mui/material/Button';
const Searchbar = (props) => {
  const [search, setSearch] = React.useState('dito');
  const { onSearch } = props;

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onButtonClickHandler = () => {
    onSearch(search);
  };
  return (
    <div className="searchbar--container">
      <div className="searchbar">
        <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
      </div>
      <div className="searchbar--btn">
        <Button variant="contained" onClick={onButtonClickHandler}>
          Buscar
        </Button>
      </div>
    </div>
  );
};
export default Searchbar;
