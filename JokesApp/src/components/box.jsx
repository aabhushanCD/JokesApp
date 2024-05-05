import photo1 from "../photo1.avif";
import box from "./box.module.css";
function Box() {
  return (
    <div className={box.content}>
      <img src={photo1} alt="" />
      <div className={box.btm}>ddfdsf</div>
    </div>
  );
}

export default Box;
