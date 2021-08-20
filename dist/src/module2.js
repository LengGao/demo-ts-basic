export class ModuleExport {
    isAcceptable(s) {
        return s.length === 5 && parseInt(s).toString() === s;
    }
}
