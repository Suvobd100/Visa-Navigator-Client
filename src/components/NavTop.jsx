const NavTop = () => {
  return (
    <div className="bg-lime-600 h-10 p-1 text-sky-100 px-4 text-sm">
      <div className="flex justify-between">
        <div className="flex space-x-8">
          <div className="flex gap-4">
            <h4> Home Delivery Available</h4> 
            <span>|</span>
          </div>
          <div className="flex gap-4">
            <h4> Return Policy </h4>
            <span>|</span>
          </div>
          <div>
            <h4> Follow Us </h4>
          </div>
        </div>
        <div>Login / Register</div>
      </div>
    </div>
  );
};

export default NavTop;
