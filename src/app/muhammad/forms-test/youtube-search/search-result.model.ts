export class SearchResult{
    id: string;
    title: string;
    description:string;
    thumpnailUrl:string;
    videoUrl: string;


    constructor(obj?:any)
    {
        this.id          = obj&&obj.id           || null;
        this.title       = obj&&obj.title        || null;
        this.description = obj&&obj.description  || null;
        this.thumpnailUrl= obj&&obj.thumpnailUrl || null;
        this.videoUrl    = obj&&obj.videoUrl     ||`https://www.youtube.com/watch?v=${this.id}`;

    }
}