import {instance} from "./apis";

export const patchSelectDate = async(id,year,month,day)=>{
    try{
        const res = await instance.patch('/api/basic/date', {
            id,
            year,
            month,
            day,
        });
        return res;
    }   catch(err){
        throw new Error(err);
    }
}