import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApiDataBase } from "./ApiDatabase";

class Entity{

    constructor(props){
        for (const prop in props){
            this[prop] = curso[prop]
        }

    }
    ApiRoute = "";
    ApiMethods = {
        Get:this.__proto__.constructor.name,
        Set:"ApiSet",
        Update:"ApiUpdate"
    }
    Get = async (Param = "") =>{
    //Almacenar cosas
    let Data = await this.TakeData();
        Data = Data.filter(ent =>{
         let flag = false;
         for(const prop in ent){
             if( ent[prop].__proto__ != Array.prototype &&
                 ent[prop].__proto__ != Object.prototype &&
                 ent[prop].__proto__ != Function.prototype &&
                 ent[prop].toString().toUpperCase().includes(Param.toUpperCase())) {
                 flag = true;
             }
         }
        return flag;
        });
    return Data.map(ent => new this.constructor(ent));
    }

    GetByProps = async (paramName,paramValue) =>{
        let Data = await this.TakeData();
        Data = Data.filter(ent => ent [paramName].toString().includes(paramValue.toString()));
        return Data.map(ent => new this.constructor(ent));

    }

    FindByProps = async (paramName,paramValue) =>{
    let Data = await this.TakeData();
   const  FindObject = Data.find(ent => ent [paramName].toString().includes(paramValue.toString()));
         if(FindObject){
            return (new this.constructor(FindObject));
        }
    } 

    Save = async (Id="Id")=>{
        let Data = await this.Get();
        this[Id]= Data.length + 1;
        Data.push(this);
        await AsyncStorage.setItem('@'+this.ApiMethods.Get, JSON.stringify(Data, this.replacer));
        //localStorage.setItem(this.ApiMethods.Get, JSON.stringify(Data));
    }
 
    async TakeData() {
        let Data = [];
        const DataBase = await AsyncStorage.getItem('@'+this.ApiMethods.Get);
        //const DataBase = localStorage.getItem(this.ApiMethods.Get);
        if (DataBase == null) {
            // Data = await import("../APIDatabase/" + this.ApiMethods.Get + ".json");
            // Data = Data.default;
            Data = ApiDataBase[this.ApiMethods.Get];
            // localStorage.setItem(this.ApiMethods.Get, JSON.stringify(Data));
            await AsyncStorage.setItem('@'+this.ApiMethods.Get, JSON.stringify(Data, this.replacer));
        } else {
            Data = JSON.parse(DataBase);
        }
        return Data;
    }
    // SaveData= async (Data)=>{
    //     await AsyncStorage.setItem('@'+this.ApiMethods.Get, JSON.stringify(Data, this.replacer));
    // }
    replacer(key, value){
        if(value.get && value.set){
            return undefined;
        }
        return value;
    }

}


export {Entity}