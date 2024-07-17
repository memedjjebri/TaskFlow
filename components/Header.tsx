const Header = () => {
  return (
    <div
      className="p-16 flex flex-col items-center bg-cover bg-center rounded-md shadow-xl text-white backdrop-blur-md"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2018/07/13/09/30/network-3535305_640.jpg')",
      }}
    >
      <h1 className="text-7xl font-bold text-orange-300 font-poppins text-shadow-lg">
        TaskFlow
      </h1>
      <p className="mt-20 text-lg text-white text-center max-w-sm font-roboto font-bold text-shadow-sm">
        TaskFlow simplifie la gestion de vos tâches quotidiennes, rendant chaque
        étape plus claire et efficace.
      </p>
    </div>
  );
};

export default Header;
