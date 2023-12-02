export async function getData(url) {
  const body = await fetch(url);

  return body.json();
}
