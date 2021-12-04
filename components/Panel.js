import { useState } from "react";
import PanelTop from "./PanelTop";

function Panel({ panelData }) {
  const [activePanel, setactivePanel] = useState(
    "Destinations for arts & culture"
  );

  const [places, setPlaces] = useState(
    panelData.filter((data) => data.title == activePanel)[0].places
  );

  const changePanel = (title) => {
    setactivePanel(title);
    setPlaces(panelData.filter((data) => data.title == title)[0].places);
  };

  return (
    <div>
      <div className="flex text-sm font-normal space-x-3 border-b-2 overflow-scroll scrollbar-hide">
        {panelData?.map(({ title }) => (
          <PanelTop
            key={title}
            title={title}
            active={activePanel === title}
            changePanel={changePanel}
          />
        ))}
      </div>
      <div className="flex flex-wrap">
        {places?.map(({ place, location }) => (
          <div
            key={place}
            className="w-[50%] md:w-[33%] lg:w-[25%]  pt-5 cursor-pointer"
          >
            <div className="text-sm font-normal text-gray-800">{place}</div>
            <div className="text-sm font-normal text-gray-400">{location}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Panel;
