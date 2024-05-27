import { Form, InputGroup } from "react-bootstrap";

import './searchBar.scss'

const SearchBar = () => {
  return (
    <>
      <div className=" my-3 ">
        <Form className="bg-primary rounded-pill" inline>
          <InputGroup>
            <img className="m-2" src="./src/assets/svg/searchIcon.svg" alt="search Icon" />
            <Form.Control 
            className="bg-primary text-white rounded-end-pill"
            type="text"
            placeholder="rechercher dans bocafina"  />
          </InputGroup>
        </Form>
      </div>
    </>
  );
};

export default SearchBar;
