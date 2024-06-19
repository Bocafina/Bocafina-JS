import { Form, InputGroup } from "react-bootstrap";
import { searchIcon } from "../../../assets/svg/icon/_navbarIcon";

import "./searchBarDesktop.scss";

const SearchBarDesktop = () => {
  return (
    <>
      <div className="my-3 ms-2 w-75 sizeSearchBar">
        <Form className="bg-black rounded-pill borderColor">
          <InputGroup>
            <img className="ms-3" src={searchIcon} alt="search Icon" />
            <Form.Control
              size="sm"
              className="bg-black rounded-end-pill"
              type="text"
              placeholder="rechercher dans Bocafina"
            />
          </InputGroup>
        </Form>
      </div>
    </>
  );
};

export default SearchBarDesktop;
