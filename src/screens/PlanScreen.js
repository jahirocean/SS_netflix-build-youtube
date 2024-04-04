import React from "react";
//import db from "../firebase";
import "./PlanScreen.css";

function PlanScreen() {
  //   const [products, setProducts] = useState();
  //   useEffect(() => {
  //     db.collection("porducts")
  //       .where("active", "==", true)
  //       .get()
  //       .then((querySnapshot) => {
  //         const products = {};
  //         querySnapshot.forEach(async (productDoc) => {});
  //       });
  //   }, []);

  return (
    <div className="planScreen">
      <div className="planScreen__plan">
        <div className="planScreen__info">
          <h5>Premium</h5>
          <h6>4k + HDR</h6>
        </div>
        <button>Subscribe</button>
      </div>

      <div className="planScreen__plan">
        <div className="planScreen__info">
          <h5>Standard</h5>
          <h6>1080px</h6>
        </div>
        <button>Subscribe</button>
      </div>

      <div className="planScreen__plan">
        <div className="planScreen__info">
          <h5>Basic</h5>
          <h6>480p</h6>
        </div>
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default PlanScreen;
