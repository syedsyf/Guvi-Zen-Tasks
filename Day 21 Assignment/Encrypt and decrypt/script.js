
async function encryptData() {
    const input= document.getElementById("input").value;
    const secret = document.getElementById("secret").value;
   const type = document.querySelector('input[name="type"]:checked').value
    try {
        const url = `https://classify-web.herokuapp.com/api/${type}`;
        const jsonData = JSON.stringify({ 
            data: input, key: secret
        });
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: jsonData
        });
        const result = await response.json();
        document.getElementById('result').innerHTML = `"${result.result}"`;
    } catch (error) {
        console.error(error);
    }
}