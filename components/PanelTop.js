function PanelTop({ title, active, changePanel }) {
  return (
    <div
      onClick={() => changePanel(title)}
      className={`cursor-pointer ${
        active ? "border-b-2 border-black font-bold" : ""
      }`}
    >
      <div className="p-3 mb-2 rounded-lg hover:bg-gray-100">{title}</div>
    </div>
  );
}

export default PanelTop;
