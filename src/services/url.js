const url ={
    BASE_URL:"https://localhost:7174/api",
    USER:{
        LOGIN:"/User/login",
        REGISTER:"/User/register",
        PROFILE:"/User/profile",
    },
    IMAGE:{
        GET:"/Image",
        POST:"/Image",
        PUT:"/Image",
        DELETE:"/Image",
    },
    FRAME:{
        LIST:"/Frame",
        CREATE:"/Frame",
        EDIT:"/Frame",
        DELETE:"/Frame",
        GET:"/Frame/get-by-id"
    },
    SIZE:{
        LIST:"/Size",
        CREATE:"/Size",
        EDIT:"/Size",
        DELETE:"/Size",
        GET:"/Size/get-by-id"
    }
}
export default url;