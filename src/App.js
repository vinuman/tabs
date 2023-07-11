import React, { useState, useEffect, useRef } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Company from "./Company";
import CompanyDetails from "./CompanyDetails";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const dataRef = useRef(null);
  const [company, setCompany] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const value = await response.json();
        dataRef.current = value;
        setCompany(value[0]);
      } catch (error) {
        throw new Error();
      }
    })();
  }, []);

  const handleCompanyTabs = (item) => {
    setCompany(item);
  };

  return (
    <>
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <Company handleCompanyTabs={handleCompanyTabs} data={dataRef.current} />
      <CompanyDetails company={company} data={dataRef.current} />
    </>
  );
}

export default App;
