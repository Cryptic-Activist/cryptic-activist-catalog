export default class Api {
  async get(
    url: string
  ): Promise<{
    status_code: 200;
    results: {
      names: string[];
      username: string;
    };
    errors: [];
  }> {
    const response = await fetch(url, {
      cache: 'no-cache',
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    return data;
  }
}
