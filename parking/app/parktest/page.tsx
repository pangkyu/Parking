export default function ParkTest() {
  const fetchData = async () => {
    const res = await fetch(
      "https://parking-good.vercel.app/parktest/api/dataList"
    );
    const data = await res.json();
    console.log(data);
  };
  fetchData();
  return <p>111</p>;
}
