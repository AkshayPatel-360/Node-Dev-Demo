// const square = function(x){
//     return x*x
// }
// const square = (x) =>{
//     return x*x
// }

// const square = (x) => x*x

// console.log(square(2))

const event = {
    name : 'Birthday Party',
    guestList: ['Akki','Reedham','Parth'],
    printGuestList() {
        console.log('Guest list for '+ this.name)

        this.guestList.forEach((guest)=>{
            console.log(guest + ' is attanding '+ this.name)
        })
    }
}

event.printGuestList()

// const sum = function(a,b){
//     return a+b
// }