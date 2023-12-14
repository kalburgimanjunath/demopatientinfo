import React, { useState } from "react";
export default function NewTableRow({ user, age }) {
  const [filteredData, setFilterData] = useState(user.resource);
  return (
    <>
      {filteredData.name
        ? filteredData.name.map((detail, index) => {
            return (
              <React.Fragment key={index + detail.family + Math.random(2, 2)}>
                <td>
                  <span className="rounded-full bg-gray-200 p-2 font-bold">
                    {detail.prefix && detail.prefix[0].toString().slice(0, 1)}
                    {detail.family && detail.family[0].toString().slice(0, 1)}
                    {detail.given && detail.given[0].toString().slice(0, 1)}
                  </span>
                </td>
                <td>
                  {detail.prefix} {detail.family} {detail.given}{" "}
                </td>
                <td>{filteredData.gender}</td>
                <td>{age}</td>
                <td
                  dangerouslySetInnerHTML={{
                    __html: filteredData.text.div,
                  }}
                />
                <td>
                  <a className="rounded-md border-2 bg-gray-300" href="">
                    details
                  </a>
                </td>
              </React.Fragment>
            );
          })
        : null}
    </>
  );
}
