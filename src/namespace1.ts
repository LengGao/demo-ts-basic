namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    let lettersRegexp = /^[A-Za-z]+$/;
    let numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }

    // Some samples to try
    let strings = ["Hello", "98052", "101"];

    // Validators to use
    let validators: { [s: string]: StringValidator; } = {};
    validators["ZIP code"] = new ZipCodeValidator();
    validators["Letters only"] = new LettersOnlyValidator();

    // Show whether each string passed each validator
    for (let s of strings) {
        for (let name in validators) {
            let isMatch = validators[name].isAcceptable(s);
            console.log(`'${ s }' ${ isMatch ? "matches" : "does not match" } '${ name }'.`);
        }
    }
}

    // Some samples to try
    let _strings = ["Hello", "98052", "101"];

    // Validators to use
    let _validators: { [s: string]: Validation.StringValidator; } = {};
    _validators["ZIP code"] = new ZipCodeValidator();
    _validators["Letters only"] = new LettersOnlyValidator();

    // Show whether each string passed each validator
    for (let s of _strings) {
        for (let name in _validators) {
            let isMatch = _validators[name].isAcceptable(s);
            console.log(`'${ s }' ${ isMatch ? "matches" : "does not match" } '${ name }'.`);
        }
    }

namespace Shapes {
    export namespace Polygons {
        export class Triangle { }
        export class Square { }
    }
}
