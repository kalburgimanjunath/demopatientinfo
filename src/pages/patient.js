import React, { useState, useEffect } from "react";
import { FilterAge } from "../components";
export default function Patient({ title }) {
  const [patients, setPatients] = useState([]);
  const [age, setAge] = useState(25);
  function handleAgeUpdate(e) {
    console.log(e);
    setAge(e);
  }
  useEffect(() => {
    fetch("https://hapi.fhir.org/baseR4/Patient?_pretty=true")
      .then((res) => res.json())
      .then((result) => setPatients(result.entry))
      .catch((err) => console.log(err));
  }, []);
  const NewTableRow = ({ user, age = 0 }) => {
    const [isValidAge, setValidAge] = useState(true);
    const [filteredData, setFilterData] = useState(user.resource);
    useEffect(() => {}, [age]);
    return (
      <>
        {filteredData.name ? (
          filteredData.name.map((detail, index) => {
            const getAge = () => {
              const date = new Date(filteredData.birthDate);
              let year = date.getUTCFullYear();
              let diffYear = 2023 - year;
              return diffYear;
            };

            return (
              <React.Fragment key={index}>
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
                <td>{getAge() > 1 ? getAge() : "-"}</td>
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
        ) : (
          <div>loading...</div>
        )}
      </>
    );
  };
  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  return (
    <div className="patient_page">
      <div className="bg-white flex items-center justify-between">
        <h3 className="p-2 border-b-2 bg-white font-bold">{title}</h3>
        <div className="flex justify-evenly items-center">
          <div>{showTime}</div>
          <div>Stop</div>
          <div>more</div>
        </div>
      </div>
      <div className="m-10">
        <FilterAge updateAge={handleAgeUpdate} />
        <div>Total:{patients.length}</div>
        <table className="">
          <thead className="font-bold capitalize">
            <tr>
              <td>profile</td>
              <td>Name</td>
              {/* <td>Visit Time</td> */}
              <td>Gender</td>
              <td>Age</td>
              <td>Condition</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {patients &&
              patients.map((item, index) => {
                const getAge = () => {
                  const date = new Date(item.resource.birthDate);
                  let year = date.getUTCFullYear();
                  let diffYear = 2023 - year;
                  return diffYear;
                };
                return (
                  <tr
                    key={item.name + index * Math.random(5)}
                    style={{
                      display:
                        ((age && age > 0) || age < 100) &&
                        getAge() !== "-" &&
                        getAge() < age
                          ? "table-row"
                          : "none",
                    }}
                  >
                    {item ? <NewTableRow user={item} age={age} /> : null}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
