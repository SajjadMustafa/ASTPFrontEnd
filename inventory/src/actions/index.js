export const DEPARTMENT = 'DEPARTMENT';
export const UNIT = 'UNIT';
export const STOCKENTRY = 'STOCKENTRY';
export const EMPLOYEE = 'EMPLOYEE';
export const ITEM = 'ITEM';
export const ISSUANCERECORD = 'ISSUANCERECORD'
export const USER = 'USER'

export const department = (dept) => {
    return {
        type: DEPARTMENT,
        dept: dept
    }
};

export const unit = (unit) => {
    return{
        type: UNIT,
        unit: unit
    }
}

export const stockentry = (stock_entry) => {
    return{
        type:STOCKENTRY,
        stock_entry:stock_entry
    }
}

export const employee = (empl) => {
    return{
        type:EMPLOYEE,
        empl: empl,
    }
}

export const item = (item) => {
    return{
        type:ITEM,
        item:item,
    }
}

export const issuancerecord = (issuance_record) => {
    return{
        type:ISSUANCERECORD,
        issuance_record:issuance_record,
    }
}

export const user = (user) => {
    return{
        type:USER,
        user:user,
    }
}