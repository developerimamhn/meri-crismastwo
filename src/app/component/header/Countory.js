import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

export default function Country() {
  const [select, setSelect] = useState("SE");
  
  const onSelect = (code) => setSelect(code);
  
  console.log("SELECT", select);

  return (
    <div className="country">
      <ReactFlagsSelect
        className="flagwdi w-[153px] align-left"
        selected={select}
        onSelect={onSelect}
        countries={["US", "GB", "FR", "DE", "IT"]}
        customLabels={{
          US: "English",
          GB: "Germany",
          FR: "France",
          DE: "Delhi", 
          IT: "Italy" 
        }}
        placeholder="Select Language"
      />
    </div>
  );
}
