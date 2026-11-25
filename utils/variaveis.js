const configLocal = JSON.parse(open('../config/config.local.json'))
export function pegarBaseURl(){
    const BaseURL = __ENV.BASE_URL || configLocal.baseUrl ;
    return BaseURL

}