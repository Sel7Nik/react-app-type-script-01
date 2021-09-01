export type UserType ={
    firstName:string
    lastName:string
    age:number
}

type PhotoType={
    large:string
    small:string
}

// type ServerResponceType ={
//     errorCode:number
//     messages:Array<string>
//     data:UserType
// }

type ServerResponseType<Data> ={
    errorCode:number
    messages:Array<string>
    data:Data
}

const response1: ServerResponseType<UserType> = {
    errorCode: 1,
    messages: ['it', 'kamasytra'],
    data: {
        firstName: 'Dmitry',
        lastName: 'Kuzyuberdin',
        age: 32,
    }
};
const response2: ServerResponseType<PhotoType> = {
    errorCode: 1,
    messages: ['it', 'kamasytra'],
    data: {
        large:'string',
        small:'string',
    }
};

//
// type StateType = typeof initial

const initial ={
    age:10,
    name:"Dima",
    user: null as null | UserType,
    photo:null as null | PhotoType
}


// const reduscer =(state:StateType,action:any)=>{
const reduscer =(state=initial,action:any)=>{

    state.photo={
        large:'',
        small:''
    }

    return state}
