export enum KataLevel  {
    BASIC = 'Basic',    //0
    MEDIUM = 'Medium',
    HIGH = 'High'
}

export interface IKata {
    name: string,
    description: string,
    level: KataLevel,
    intents: number,
    stars: number,
    solution: string,
    creator: string, //id del creador
    participants: string[],
    

}