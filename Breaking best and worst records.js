function breakingRecords(scores) {
    let [record] = scores;
    let extralow = 0;
    let extrahigh = 0;
    //console.log(scores)
    let store = scores
    
    let bigholder = [];
    let smallholder = [];
    let score = store.forEach(item => {
        if (bigholder.length == 0 && item > record) {
            extrahigh++;
           
            bigholder.push(item);
        }

        else if (item > record & [...bigholder, item].every(kim => kim <= item) & bigholder[bigholder.length - 1] != item) {
            extrahigh++;
            bigholder.push(item);
        }

        else if (item < record & [...smallholder, item].every(kim => kim >= item) & smallholder[smallholder.length - 1] != item) {
            extralow++;
            smallholder.push(item)
        }
    })
   return [extrahigh, extralow];
}
