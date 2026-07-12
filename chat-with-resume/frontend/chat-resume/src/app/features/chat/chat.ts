import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-chat',
  imports: [FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
  standalone: true
})
export class Chat {
private cdr = inject(ChangeDetectorRef);
  

  question: string = '';
  answer: string = '';
  private resumeService = inject(ResumeService);

  askQuestion() {
    console.log('---------', this.question)
    this.resumeService.askQuestion(this.question).subscribe((result: any) => {
      this.answer = result.success;
      this.cdr.detectChanges();
    })
  }


  uploadResume(event: Event) {
    let file = event.target as HTMLInputElement;
    if (file?.files?.length) {
      this.resumeService.uploadResume(file.files[0]).subscribe()
    }

  }
}
