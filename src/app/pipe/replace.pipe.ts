import { Pipe } from "@angular/core";


@Pipe({
    name: 'replace'

})

export class ReplacePipe{

    transform(value: string, char: string, valuetoReplace: string){
        return value.replace(char, valuetoReplace);

    }

}