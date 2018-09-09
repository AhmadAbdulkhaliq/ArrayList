
class ArrayList{
    constructor(){
        this.array=[1,2,3,4]
        this.myArray=[1,2,3]
    }
    
    getArray(){
        return this.array
    }

    myPush(data){
        let length = this.array.length
        this.array[length] = data
        return this.array    }
    muUnshift(data){
        for (let i = this.array.length - 1; i >=0; i--) {
            this.array[i +1] = this.array[i];
         }
         this.array[0] = data;
         return this.array

    }

    myPop(){
        let length=this.array.length-1
        this.array.splice(length,1)
        return this.array
    }

    myMap(){
      return  this.array.map( data=> console.log(data))
        
    }

    myFilter(func){
       return this.array.filter(func)
    }

    myClear(){
       return this.array=[]
    }

    myReduce(){
      return  this.array.reduce((ac , number) =>{
            return ac + number
        },0)
    }

    myFind(func){
       return this.array.find(func)
    }

    myConcat(){
        return this.array.concat(this.myArray)
    }

}
