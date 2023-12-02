import { useState, useEffect } from "react";
import { getData } from "../utils/httpRequests";
import Dropdown from "./Dropdown";

function LocaltionSelect() {
  //   const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");

  //   const [districts, setDistricts] = useState([]);
  const [selecteddistrict, setSelectedDistrict] = useState("");
  //   useEffect(() => {
  //     // lấy dữ liệu từ API và cập nhập vào state provinces
  //     const fetchData = async () => {
  //       const data = await getData("https://provinces.open-api.vn/api/p/");
  //       setProvinces(data);
  //     };

  //     fetchData();
  //   }, []);

  //   useEffect(() => {
  //     // lấy dữ liệu từ API và cập nhập vào state provinces
  //     if (selectedProvince) {
  //       (async () => {
  //         const data = await getData(
  //           `https://provinces.open-api.vn/api/p/${selectedProvince}?depth=2`
  //         );
  //         debugger;
  //         setDistricts(data.districts);
  //       })();
  //     }
  //   }, [selectedProvince]);

  const handleChangeProvince = (event) => {
    setSelectedProvince(event.target.value);
    setSelectedDistrict(""); //
  };

  const handleChangeDistrict = (event) => {
    setSelectedDistrict(event.target.value);
  };

  return (
    <div className="container">
      {/* <label>Chọn Tỉnh / Thành phố</label>
      <select
        class="form-select"
        aria-label="Default select example"
        value={selectedProvince}
        onChange={handleChangeProvince}
      >
        <option value="">Chọn Tỉnh / Thành phố</option>
        {provinces.map((province) => (
          <option key={province.code} value={province.code}>
            {province.name}
          </option>
        ))}
      </select> */}
      <Dropdown
        placeholder="Chọn Tỉnh / Thành phố"
        apiUrl="https://provinces.open-api.vn/api/p/"
        onChange={handleChangeProvince}
        value={selectedProvince}
      />

      <Dropdown
        placeholder="Chọn Quận / Huyện"
        apiUrl={`https://provinces.open-api.vn/api/p/${selectedProvince}?depth=2`}
        onChange={handleChangeDistrict}
        value={selecteddistrict}
        shouldFetchData={!!selectedProvince}
        dataKey="districts"
      />

      {/* <label>Chọn Quận / Huyện</label>
      <select
        class="form-select"
        aria-label="Default select example"
        value={selecteddistrict}
        onChange={handleChangeDistrict}
        disabled={!selectedProvince}
      >
        <option value="">Chọn Quận / Huyện</option>
        {districts.map((district) => (
          <option key={district.code} value={district.code}>
            {district.name}
          </option>
        ))}
      </select> */}
    </div>
  );
}

export default LocaltionSelect;
