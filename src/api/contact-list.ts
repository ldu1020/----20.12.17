/** @format */

export async function fetchContactListAll(): Promise<ContactListType[]> {
  const requestOptions = {
    method: 'GET',
  };
  return fetch('http://localhost:4000/user/list', requestOptions) //
    .then((res) => res.json())
    .catch((error) => console.log('error', error));
}
