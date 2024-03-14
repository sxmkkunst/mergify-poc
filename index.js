import fetch from 'node-fetch';

async function main() {
    const res = await fetch('https://httpbin.org/uuid', {
        headers: {
            accept: 'application/json'
        }
    })
    const json = await res.json();
    console.log(json.uuid)
}

main()