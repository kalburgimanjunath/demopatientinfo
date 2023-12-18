import React, { useState, useEffect } from "react";
import { FilterAge, NewTableRow } from "../components";
export default function Patient({ title }) {
  const [patients, setPatients] = useState([]);
  const [patientFilter, setPatientFilter] = useState([]);
  const [age, setAge] = useState(0);
  function handleAgeUpdate(e) {
    setAge(e);

    const newPatientList = patients.filter((item) => {
      const getAge = () => {
        const date = new Date(item.resource.birthDate);
        let year = date.getUTCFullYear();
        let diffYear = 2023 - year;
        if (isNaN(diffYear) && !item.resource.birthDate) {
          return "-";
        }

        return diffYear;
      };
      return getAge() < age && item.resource.birthDate != undefined;
    });
    setPatientFilter(newPatientList);
  }
  const loadData = async () => {
    try {
      await fetch("https://hapi.fhir.org/baseR4/Patient?_pretty=true")
        .then((res) => res.json())
        .then((result) => {
          setPatients(result.entry);
          setPatientFilter(result.entry);
        })
        .catch((err) => console.log(err));
    } catch {
      (error) => console.log(error);
    }
  };
  useEffect(() => {
    if (age == 0) {
      loadData();
    }
  }, [age]);

  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  return (
    <div className="patient_page bg-gray-100">
      <div className="bg-white shadow-lg flex items-center justify-between">
        <h3 className="p-2 bg-white font-bold">{title}</h3>
        <div className="flex justify-evenly items-center p-2">
          <div className="font-bold">{showTime}</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-10 bg-gray-100 w-full newtable">
        <FilterAge updateAge={handleAgeUpdate} />
        <table>
          <thead
            className="font-bold capitalize"
            style={{ display: patientFilter.length > 0 ? "" : "none" }}
          >
            <tr>
              <td>
                <p>
                  <span>profile</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </p>
              </td>
              <td>
                <p>
                  <span>Name</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </p>
              </td>
              {/* <td><div>Visit Time</div></td> */}
              <td>
                <p>
                  <span>Gender</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </p>
              </td>
              <td>
                <p>
                  <span>Age</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </p>
              </td>
              <td>
                <p>
                  <span>Condition</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </p>
              </td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {patientFilter && patientFilter.length > 0 ? (
              patientFilter.map((item) => {
                const getAge = () => {
                  const date = new Date(item.resource.birthDate);
                  let year = date.getUTCFullYear();
                  let diffYear = 2023 - year;
                  if (isNaN(diffYear) && !item.resource.birthDate) {
                    return "-";
                  }

                  return diffYear;
                };
                return (
                  <tr
                    key={Math.random(5)}
                    style={{
                      display: isNaN(getAge())
                        ? "table-row"
                        : getAge() < age
                          ? "table-row"
                          : "none",
                    }}
                  >
                    {item ? <NewTableRow user={item} age={getAge()} /> : null}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>
                  <p className="justify-center text-center">Loading...</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
