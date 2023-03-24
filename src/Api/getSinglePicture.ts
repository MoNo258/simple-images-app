export async function getSinglePicture(id: number) {
  try {
    const response = await fetch(`https://picsum.photos/id/${id}/info`, {
      method: "GET",
      headers: {
        Accept: `application/json;odata=nometadata;`
      }
    });
    if (response.status === 200) {
      return (await response.json()) as IImage;
    } else {
      throw Error(`${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    return Promise.reject(error);
  }
}
