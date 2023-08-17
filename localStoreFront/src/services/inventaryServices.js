const URL_invtry = 'http://localhost:3030/inventary/';

const getAllInvtry = async () => {
    try {
        const res = fetch(URL_invtry, {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        });
        if (!res.ok) throw new Error("Response not ok");
        const parsed = await res.json();
        return parsed;
    } catch (err) {
        throw err;
    }
}

const getAllInvtryById = async (id) => {
    try {
        const res = fetch(URL_invtry + id, {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        });
        if (!res.ok) throw new Error("Response not ok");
        const parsed = await res.json();
        return parsed;
    } catch (err) {
        throw err;
    }
}




export { getAllInvtry, getAllInvtryById };