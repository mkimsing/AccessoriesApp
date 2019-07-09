import React from "react";

function Newsletter() {
  return (
    <div className="newsletter">
      <h5>Newsletter </h5>
      <p>
        Subscribe to get special offers, free giveaways, and once-in-a-lifetime
        deals.
      </p>
      <div className="newsletter__form">
        <form>
          <input type="text" name="newsletter" />
          <button className="input__button">JOIN</button>
        </form>
      </div>
    </div>
  );
}
export default Newsletter;
