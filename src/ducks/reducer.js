const NEW_PROP_NAME = 'NEW_PROP_NAME';
const NEW_PROP_DESC = 'NEW_PROP_DESC';

const initialState = {
    property_name: '',
    description: ''
}

export function newName(name){
    return {
        type: NEW_PROP_NAME,
        payload: name
    }
};

export function newDesc(desc){
    return {
        type: NEW_PROP_DESC,
        payload: desc
    }
};


export default (state = initialState, action) => {
    switch(action.type){
        case NEW_PROP_DESC:
            return { ...state, description: action.payload };

        case NEW_PROP_NAME:
            return { ...state, property_name: action.payload };

        default:
            return state;
    }
}