export const fetchData =  async () => {
    const resp = await fetch('/color.json')
    const data = await resp.json()
    return data;
}
