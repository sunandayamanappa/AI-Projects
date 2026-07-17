import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class CodeAssistantService {
     private http = inject(HttpClient);

    explainCode(code: string) {
        return this.http.post(`http://localhost:3000/api/code/explain`, {code})
    }

    findBugs(code: string) {
        return this.http.post(`http://localhost:3000/api/code/find-bugs`, {code})
    }

    generateUnitTests(code: string) {
        return this.http.post(`http://localhost:3000/api/code/generate-unit-tests`, {code})
    }
}
