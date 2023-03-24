export async function getPictures(limit: number) {
  try {
    const response = await fetch(`https://picsum.photos/v2/list?page=1&limit=${limit}`, {
      method: "GET",
      headers: {
        Accept: `application/json;odata=nometadata;`
      }
    });
    if (response.status === 200) {
      return (await response.json()) as IImage[];
    } else {
      throw Error(`${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    return Promise.reject(error);
  }
}
