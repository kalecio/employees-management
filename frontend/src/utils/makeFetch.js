async function makeFetch(url, options) {
  try {
    const res = await fetch(url, options);
    const json = await res.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

export default makeFetch;
