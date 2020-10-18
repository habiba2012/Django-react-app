import { BASE_URL } from "./constants";

class RestApi {
    static async getStore() {
        const response = await fetch(`${BASE_URL}/api/add_store/?format=json`);
        const data = await response.json();
        if (response.status >= 400) throw Error(data.message);
        return data;
    }
    // name,adress,shopDomain,oppeningHours,categories,
    static async addStore(name, website, marker, street, latitude, longitude) {
        const response = await fetch('http://127.0.0.1:8000/api/add_store/?format=json', {
            // 127.0.0.1:8000/api/add_store
            method: "POST",
            body: JSON.stringify({
                name,
                website,
                marker,
                street,
                latitude,
                longitude
            }),
            headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        if (response.status >= 400) throw Error(data.message);
        return data;
    }
}

export default RestApi;
