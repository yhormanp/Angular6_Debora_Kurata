import { Pipe} from '@angular/core';

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe ({
    name: 'convertToSpaces'
})

export class ConvertToSpacesPipe {
    transform (value: string, character: string): string {
        return value.replace(character, ' ');
    }
}
