import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';

@Service()
export class Resume {
    private http = inject(HttpClient);

    uploadResume(file: File, jobDescription: string) {
        const formData = new FormData();
        formData.append('resume', file);
        formData.append(
            'jobDescription',
            jobDescription
        );
        return this.http.post('http://localhost:3000/api/resume/upload', formData);
    }
}
