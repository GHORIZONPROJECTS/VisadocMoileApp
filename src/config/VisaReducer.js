const VisaReducer =(state, action) => {
    switch(action.type){
        case "APPLICANT" :{
            return {
                visaId : action.payload,
            };
               
        }
        case "FINISH" :{
            return {
                visa : null,
            };
               
        }
        default:
            return state;
    }
}

export default VisaReducer