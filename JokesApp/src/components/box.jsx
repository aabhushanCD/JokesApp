  import photo1 from "../photo1.avif";
  import box from "./box.module.css";
  function Box() {
    return (
      <div className={box.content}>
        <img src={photo1} alt="" />
        <div className={box.btm}>
          <div className={box.left}>
         <button>likeme</button>
          </div>
          <div className={box.right}>
            <button>save</button>
            <button>share</button>

          </div>
        </div>
      </div>
    );
  }

  export default Box;
