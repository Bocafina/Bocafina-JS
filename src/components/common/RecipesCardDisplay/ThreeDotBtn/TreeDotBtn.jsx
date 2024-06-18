import "./threeDotBtn.scss";
import { threeDotBtnIcon } from "../../../../assets/svg/icon/_icon.js";

const ThreeDotBtn = () => {
  return (
    <>
      <button>
        <img src={threeDotBtnIcon} alt="" />
      </button>
    </>
  );
};

export default ThreeDotBtn;
