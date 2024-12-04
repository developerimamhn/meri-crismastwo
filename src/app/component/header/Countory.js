import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";


export default function Countory() {
  const [select, setSelect] = useState("SE");
  const onSelect = (code) => setSelect(code);
  console.log("SELECT", select);
  return (
    <div className="Countory">
      <ReactFlagsSelect
        className="flagwdi w-[153px] align-left"
        selected={select}
        onSelect={onSelect}
        countries={["US", "GB", "FR", "DE", "IT"]}
        customLabels={{ US: "English", GB: "Germany", FR: "France", DE: "Delli", IT: "IT" }}
        placeholder="Select Language"
        /*showSelectedLabel={showSelectedLabel}
        selectedSize={selectedSize}
        showOptionLabel={showOptionLabel}
        optionsSize={optionsSize}
        placeholder={placeholder}s
        searchable={searchable}
        searchPlaceholder={searchPlaceholder}
        alignOptionsToRight={alignOptionsToRight}
        fullWidth={fullWidth}
        disabled={disabled} */
        
      />
    </div>
  );
}
