import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';

import { Observable } from 'rxjs';

@Service()
export class ResumeService {
    private http = inject(HttpClient);

    askQuestion(question: string){
        return this.http.post('http://localhost:3000/api/chat/ask', {question})
    }

    uploadResume(file: File): Observable<any> {
        let formData = new FormData();
        formData.append('resume', file)
        return this.http.post('http://localhost:3000/api/chat/upload', 
            formData
        )
    }
}
