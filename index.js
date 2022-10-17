// code your solution here
const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ];
function superbowlWin(record){
    
   let findYear = record.find(({result})=>result==="W");
   if(findYear){
    return findYear.year
   }
   else {return undefined}
}
