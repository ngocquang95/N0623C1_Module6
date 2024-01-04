export default function Page({ params }) {
  console.log(params.id);
  return <div>My Post: {params.id}</div>;
}
