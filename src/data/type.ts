export type HeroT = {
    image : string,
    big_text : string,
    desc : string,
}

export type AboutT = {
    image : string,
    title : string,
    desc : string,
}

export type ServiceT = {
    title : string,
    services : {
        title : string,
        image : string,
        desc : string,
    }[]
}