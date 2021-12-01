

function promise() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
          console.log('sou uma promise');  
          resolve();
        }, 2000)
    })
}

export default async function () {
    await promise();
    console.log('terminou');
}