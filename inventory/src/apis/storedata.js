export const storeDept = (payload) => {
    fetch('http://127.0.0.1:8000/astp/dept/',
        {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
};

export const storeStockEntry = (payload) => {
    fetch('http://127.0.0.1:8000/astp/stockentry/',
        {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
};

export const storeUnit = (payload) => {
    fetch('http://127.0.0.1:8000/astp/unit/',
        {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
};

export const storeItem = (payload) => {
    fetch('http://127.0.0.1:8000/astp/item/',
        {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
};


export const storeIssuanceRecord = (payload) => {
    fetch('http://127.0.0.1:8000/astp/ir/',
        {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
};

export const storeUser = (payload) => {
    fetch('http://127.0.0.1:8000/astp/user/',
        {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
};