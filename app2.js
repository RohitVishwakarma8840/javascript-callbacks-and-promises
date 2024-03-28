// function getData(dataId){
//     console.log("data ",dataId);
// }

// function getData(dataId){

// setTimeout(()=>{
//     console.log("Data", dataId);
// },2000);

// }

// getData(1); // 2s
// getData(2); // 2s 
// getData(3); // 2s 

function getData(dataId,getNextdata){

setTimeout(()=>{
    console.log("data ",dataId);

    if(getNextdata){
        getNextdata();
    }

},2000);
}

getData(1,()=>{
    getData(2);
})