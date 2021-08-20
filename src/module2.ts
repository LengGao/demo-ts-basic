
export class ModuleExport {
    isAcceptable(s: string) {
        return s.length === 5 && parseInt(s).toString() === s
    }
}