import { useState, useEffect } from "react";
import { getData } from "../utils/httpRequests";

function Dropdown({
  placeholder,
  apiUrl,
  onChange,
  value,
  shouldFetchData = true,
  dataKey
}) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // lấy dữ liệu từ API và cập nhập vào state provinces
    if (shouldFetchData) {
      const fetchData = async () => {
        const data = await getData(apiUrl);
        setOptions(dataKey ? data[dataKey] : data);
      };

      fetchData();
    }
  }, [apiUrl]);

  return (
    <>
      <label>{placeholder}</label>
      <select
        class="form-select"
        aria-label="Default select example"
        value={value}
        onChange={onChange}
        disabled={!shouldFetchData}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default Dropdown;
