// function obj() {
//     return 'Open';
// }




const help =  function(schedule, time){
    const {day, daytime}= time;
    const {open, close} = schedule[day];
    if(daytime >= open && daytime < close ) {
        return "Open"
    } else {
        return "Closed"
    }
}

module.exports =  {
    helper: help,


    init: function(schedule, getTime){

        return {
            isOpen: function(){
            return helper(schedule, getTime())
            },

            getNextOpen: function(){

            }
        };

    }
};