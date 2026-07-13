import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResumeService } from '../../services/resume.service';
import { marked } from 'marked';

@Component({
  selector: 'app-chat',
  imports: [FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
  standalone: true
})
export class Chat {
private cdr = inject(ChangeDetectorRef);
  
  jd: string = '';
  question: string = '';
  answer: string = '';
  private resumeService = inject(ResumeService);

  askQuestion() {
    const payload = { question: this.question}
    this.getResponse(payload);
    this.cdr.detectChanges();
  }


  uploadResume(event: Event) {
    let file = event.target as HTMLInputElement;
    if (file?.files?.length) {
      this.resumeService.uploadResume(file.files[0]).subscribe()
    }

  }

  compareAgainstJD(question: string, jd: string){
    const payload = { question, jd};
    this.getResponse(payload);
    this.cdr.detectChanges();
  }

  getResponse(payload: {question: string, jd?: string}) {
    this.resumeService.askQuestion(payload).subscribe((result: any) => {
      this.answer = marked.parse(result.success) as string;
      this.cdr.detectChanges();
    })
  }
}
