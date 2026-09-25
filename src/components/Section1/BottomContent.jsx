const BottomContent = (props) => {
  return (
    <div className="absolute bottom-25 left-0 right-0 flex flex-wrap justify-center gap-3 px-5">

      {props.skills.map((props) => (
        <div
          key={props.name}
          className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-md"
        >
          <img
            src={props.logo}
            alt={props.name}
            className="h-5 w-5 object-contain"
          />

          <span>{props.name}</span>
        </div>
      ))}

    </div>
  );
};

export default BottomContent;