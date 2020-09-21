const data=['T','H','A','n','h','S','E','&','*','-','?','a',';','j','15'];
const number=[1,6,8,10,12,0,2,7,5]
const genHassPass=(value)=>{
    var l= value.length;
    var i=0;
    var datagen='';
    while(i<length){
        datagen=datagen+data[number[i%9]]+data[i%15];
        i=i+1;
    }
    return datagen;
}
export default genHassPass;