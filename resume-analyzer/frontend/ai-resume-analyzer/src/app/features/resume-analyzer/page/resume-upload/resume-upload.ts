import { ChangeDetectorRef, Component } from '@angular/core';
import { Resume } from '../../../../core/service/resume'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resume-upload',
  imports: [CommonModule, FormsModule],
  templateUrl: './resume-upload.html',
  styleUrl: './resume-upload.scss',
  standalone: true
})
export class ResumeUpload {
  selectedFile!: File
  analysis: any = '';
  jobDescription = '';

  dummyJD = `Looking for Senior Angular Developer.
              Required Skills:

              Angular
              TypeScript
              RxJS
              Docker
              Kubernetes
              AWS
              CI/CD

              Experience:
              5+ years`
  constructor(private resumeService: Resume, private cdr: ChangeDetectorRef) {

  }

  onFileSelected(file: Event) {
    const input = file.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFile = input.files[0];
    }

  }

  analyze() {
    this.resumeService.uploadResume(this.selectedFile, this.jobDescription
    ).subscribe({
      next: (response: any) => {
        this.analysis = response.content;
        console.log(this.analysis
        )
        this.cdr.detectChanges()
      }
    })

  }

}
