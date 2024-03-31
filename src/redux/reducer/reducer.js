let initialState = {
    count:0,
    random:0,
    click:-1,
};



function reducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case "INCREMENT" :
            return {...state,count: state.count + action.payload.num};
        case "MINUS" : 
            return {...state,count: state.count - action.payload.num};
        case "RANDOM" : 
            return {...state,random: Math.floor(Math.random()*100)};
        case "NEWNUMBER" : 
            return {...state,count: 0};
        case "CLICK" :
            return {...state,click: state.click + 1};
        case "CLICKZERO" : 
            return {...state,click: -1};
        default :
            return {...state};
    }

    
    
}

export default reducer;