import Components from '../components'
const GetApiCall = (
    url: string,
    show: boolean = true,
    header: object = {},
) => {
    return new Promise((resolve, reject) => {
        if (show) {
            Components.Loader.showLoader(true)
        }
        var showApiProcess = true;
        if (showApiProcess) {
            console.log('URL->', url);
        }
        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                // AuthorizationUser: Config.Constant.AUTHORIZATION_USER,
                // Authorization: 'Bearer ' + Config.Constant.USER_TOKEN,
                ...header,
            },
        }).then((r) =>
            r.json()
        ).then((response) => {
            if (show) {
                Components.Loader.showLoader(false)
            }
            if (showApiProcess) {
                console.log('Responce->', response);
            }
            // if (response.status == '200') {
            resolve(response);
            // } else {
            //     reject(response);
            // }
        }).catch((error) => {
            if (show) {
                Components.Loader.showLoader(false)
            }
            reject(error);
        })
    })
}

const PostApiCall = (
    url: string,
    payload: BodyInit,
    show: boolean = true,
    header: object = {},
) => {
    return new Promise((resolve, reject) => {
        if (show) {
            Components.Loader.showLoader(true)
        }
        var showApiProcess = true;
        if (showApiProcess) {
            console.log('URL->', url);
            console.log('Request Data->', payload);
        }
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                // AuthorizationUser: Config.Constant.AUTHORIZATION_USER,
                // Authorization: 'Bearer ' + Config.Constant.USER_TOKEN,
                ...header,
            },
            body: payload,
        }).then((r) =>
            r.json()
        ).then((response: any) => {
            if (show) {
                Components.Loader.showLoader(false)
            }
            if (showApiProcess) {
                console.log('URL->', url);
                console.log('Response->', response);
            }
            // if (response.status == '200') {
            resolve(response);
            // } else {
            //     reject(response);
            // }

        }).catch((error) => {
            if (show) {
                Components.Loader.showLoader(false)
            }
            reject(error);
        })
    })
}

export default {
    GetApiCall,
    PostApiCall
}