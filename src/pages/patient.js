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
  const NewTable = ({ user, age = 0 }) => {
    console.log(user);
    const [isValidAge, setValidAge] = useState(true);
    return (
      <>
        {user.resource.name ? (
          user.resource.name.map((detail, index) => {
            const getAge = () => {
              const date = new Date(user.resource.birthDate);
              let year = date.getUTCFullYear();
              let diffYear = 2023 - year;
              return diffYear;
            };
            // if (getAge() < age) {
            //   setValidAge(false);
            // } else{
            //   setValidAge(true);
            // }
            return (
              <React.Fragment
                key={index}
                style={{ display: isValidAge ? "block" : "none" }}
              >
                <td></td>
                <td>
                  {detail.prefix} {detail.family} {detail.given}{" "}
                </td>
                <td>{user.resource.gender}</td>
                <td>{getAge() > 1 ? getAge() : "-"}</td>
                <td
                  dangerouslySetInnerHTML={{
                    __html: user.resource.text.div,
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
        <div className="flex justify-evenly">
          <div>{showTime}</div>
          <div>Stop</div>
          <div>more</div>
        </div>
      </div>
      <div className="m-10">
        <FilterAge updateAge={handleAgeUpdate} />
        <table className="">
          <thead>
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
                return (
                  <tr key={item.name + index * Math.random(5)}>
                    {item ? <NewTable user={item} age={age} /> : null}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
