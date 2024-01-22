export const Modal = () => {
  return (
    <form action="">
      <label htmlFor="">
        Erwachsene
        <button>-</button>
        <input type="text" />
        <button>+</button>
      </label>
      <label htmlFor="">
        Kinder
        <p>0 bis 14 Jahre</p>
        <button>-</button>
        <input type="text" />
        <button>+</button>
      </label>
      <label htmlFor="">
        Fahrräder
        <p>E-Bikes und Roller/Scooter sind in Bussen nicht erlaubt.</p>
        <button>-</button>
        <input type="text" />
        <button>+</button>
      </label>
    </form>
  );
};
