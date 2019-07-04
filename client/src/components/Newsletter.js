import React from "react";

function Newsletter() {
  return (
    <div className="footer__newsletter">
      <p>Newsletter </p>
      <p>
        Subscribe to get special offers, free giveaways, and once-in-a-lifetime
        deals.
      </p>
      <form>
        <input type="text" name="newsletter" />
        <button>JOIN</button>
      </form>
    </div>
  );
}
export default Newsletter;
