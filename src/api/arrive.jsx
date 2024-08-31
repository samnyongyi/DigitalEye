import {instance} from "./apis";

export const patchArriveCity = async (region, id) =>{
    
    try{
        const res = await instance.patch('/api/basic/arrival/regions',{
            region,
            id,
        });
        console.log(res);
        return res;
    }   catch(err){
        throw new Error(err);
    }
};

export const patchArriveStation = async (station,id) =>{
    try{
        const res = await instance.patch('/api/basic/arrival',{
            station,
            id,
        });
        return res;
    }   catch(err){
        throw new Error(err);
    }
};
//음성인식 api 완료후 다시 작성