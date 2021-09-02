export const request = async (url, headers, method) => {
    const response = await fetch(url, {
        method: method || 'GET', redirect: 'follow',
        headers: headers
    });

    if (response.ok && response.status >= 200 && response.status < 400) {
        return await response.json();
    }

    throw new Error(await response.text());
};