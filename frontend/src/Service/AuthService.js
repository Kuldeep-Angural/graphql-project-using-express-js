export const getCurrentUser=()=>{
    let data = localStorage.getItem("userData");
    return data;
}

export const setCurrentUser=(user)=>{
    localStorage.setItem("userData", JSON.stringify(user));
}

export const isLoggedIn=()=>{
    let user=getCurrentUser();
    if(user!=null){
        return true;
    }
    else{
        return false;
    }
}

export const doLogOut=()=>{
    localStorage.removeItem("userData");   
}