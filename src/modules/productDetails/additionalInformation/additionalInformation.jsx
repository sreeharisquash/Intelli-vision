import React from "react";

const AdditionalInfo = () => {
  const additionalTab = [
    {
      id: "1",
      head: "Additional info",
      para: "Venenatis duis tristique accumsan netus enim in posuere torquent ut ullamcorper integer aliquam a mi curae elementum. Maecenas iaculis viverra tellus ridiculus a sed vestibulum dapibus.Ante a mollis habitant duis urna cum iaculis ullamcorper luctus",
    },
    {
      id: "1",
      head: "Additional info",
      para: "Venenatis duis tristique accumsan netus enim in posuere torquent ut ullamcorper integer aliquam a mi curae elementum. Maecenas iaculis viverra tellus ridiculus a sed vestibulum dapibus.Ante a mollis habitant duis urna cum iaculis ullamcorper luctus",
    },
    {
      id: "1",
      head: "Additional info",
      para: "Venenatis duis tristique accumsan netus enim in posuere torquent ut ullamcorper integer aliquam a mi curae elementum. Maecenas iaculis viverra tellus ridiculus a sed vestibulum dapibus.Ante a mollis habitant duis urna cum iaculis ullamcorper luctus",
    },
  ];
  return (
    <>
      <div className="row ">
        {additionalTab.map((items) => (
          <div className="col-lg-4">
            <h4>{items.head}</h4>
            <p>{items.para}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default AdditionalInfo;
