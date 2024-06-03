
import { searchIcon } from "../../../assets/svg/icon/_navbarIcon";
import { Form, InputGroup } from "react-bootstrap";

import "./searchBar.scss";

const SearchBar = () => {
  return (
    <>
      <div className=" my-3 ">
        <Form className="bg-primary rounded-pill">
          <InputGroup>
            <img className="m-2" src={searchIcon} alt="search Icon" />
            <Form.Control
              className="bg-primary text-white rounded-end-pill"
              type="text"
              placeholder="rechercher dans Bocafina"
            />
          </InputGroup>
        </Form>
      </div>
    </>
  );
};

export default SearchBar;
