type fetchRandomDogResponse = {
  message: string, 
  status: "success"
}
type fetchRandomDogType = () => Promise<fetchRandomDogResponse>

const page = async () => {
//   const response =  fetchRandomDog();
// const data = response.json();
// console.log(data)
  return <div className="">
    {/* {data.message} 
     */}
     {Math.random()}
  argentina</div>;
};
export default page;
