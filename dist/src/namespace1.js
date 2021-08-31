var Validation;
(function (Validation) {
    let lettersRegexp = /^[A-Za-z]+$/;
    let numberRegexp = /^[0-9]+$/;
    class LettersOnlyValidator {
        isAcceptable(s) {
            return lettersRegexp.test(s);
        }
    }
    Validation.LettersOnlyValidator = LettersOnlyValidator;
    class ZipCodeValidator {
        isAcceptable(s) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
    Validation.ZipCodeValidator = ZipCodeValidator;
    // Some samples to try
    let strings = ["Hello", "98052", "101"];
    // Validators to use
    let validators = {};
    validators["ZIP code"] = new ZipCodeValidator();
    validators["Letters only"] = new LettersOnlyValidator();
    // Show whether each string passed each validator
    for (let s of strings) {
        for (let name in validators) {
            let isMatch = validators[name].isAcceptable(s);
            console.log(`'${s}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
        }
    }
})(Validation || (Validation = {}));
// Some samples to try
let _strings = ["Hello", "98052", "101"];
// Validators to use
let _validators = {};
_validators["ZIP code"] = new ZipCodeValidator();
_validators["Letters only"] = new LettersOnlyValidator();
// Show whether each string passed each validator
for (let s of _strings) {
    for (let name in _validators) {
        let isMatch = _validators[name].isAcceptable(s);
        console.log(`'${s}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
    }
}
var Shapes;
(function (Shapes) {
    let Polygons;
    (function (Polygons) {
        class Triangle {
        }
        Polygons.Triangle = Triangle;
        class Square {
        }
        Polygons.Square = Square;
    })(Polygons = Shapes.Polygons || (Shapes.Polygons = {}));
})(Shapes || (Shapes = {}));
