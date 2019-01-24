
const axios = require("axios");



class HelloWorld{
   constructor(url){
     this.url = url;
   }

   async getScheme(obj_id, obj_type){
      return axios.post(this.url, {"ops":[{"type":"get", "obj":"scheme", obj_id, obj_type}]})
   }

   getMe(){
     return "Привет, " + this.name
   }

}


module.exports = HelloWorld;
