export default function ParkTest() {
  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/api/dataList");
    const data = await res.json();
    console.log(data);
  };
  fetchData();
  return <p>111</p>;
}
