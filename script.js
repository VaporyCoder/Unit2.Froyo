const flavors = window.prompt("What you want? Example: Vanilla,Chocolate,Coffee");
const arr = flavors.split(",");
const stats = {

}

for (let i = 0; i < arr.length; i++) {
    const flavor = arr[i];
    if(stats[flavor] === undefined){
        stats[flavor] = 0;
    }
    stats[flavor]++;
};

console.log(stats);