module.exports = function check(str, bracketsConfig) {

 for (let i = 0; i < bracketsConfig.length;) {
   let strOfArr = bracketsConfig[i].join("");
   if (str.includes(strOfArr)) {
        str=str.replace(strOfArr, "");
        i=0;
      } else i++;
    
  }
  return str.length==0 ? true : false;
  
}
