import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { CodeAssistantService } from '../../services/code-assistant-service';
import * as marked from 'marked'
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-assistant',
  imports: [FormsModule, MatProgressSpinnerModule],
  templateUrl: './assistant.html',
  styleUrl: './assistant.scss',
  standalone: true
})
export class Assistant {
  private assistant = inject(CodeAssistantService);
  private cdr = inject(ChangeDetectorRef);
  code = signal('');
  activeButtonSpinner = signal<string|null>(null);
  result = signal('');
  buttonLabel: string = '';
  buttonMessage: string = '';
  callAssistant: any = [
    {
      id: 1,
      label: 'Review',
      message: 'Review in progress',
      method: () => this.reviewCode()
    },
    {
      id:2,
      label: 'Find Bugs',
      message: 'Finding Bugs',
      method: () => this.findBugs()
    },
    {
      id:3,
      label: 'Generate unit tests',
      message: 'Generating unit tests',
      method: () => this.generateUnitTests()
    }
  ]
  
  onCodeChange(latestCode: string) {
    this.code.set(latestCode);
    this.result.set('');
    this.activeButtonSpinner.set(null);
  }

  reviewCode(){
    this.buttonMessage =  "Reviewing the code........";
    this.buttonLabel = "Review code"
    const latestCode = this.code();
    this.activeButtonSpinner.set('Review');

    this.assistant.explainCode(latestCode)
    .pipe(finalize(() => this.activeButtonSpinner.set(null)))
    .subscribe((response: any) => {
      this.result.set(marked.parse(response.data) as string);
    })
  }

  findBugs(){
    const latestCode = this.code();
    this.activeButtonSpinner.set('Find Bugs');

    this.assistant.findBugs(latestCode)
    .pipe(finalize(() => this.activeButtonSpinner.set(null)))
    .subscribe((response: any) => {
      this.result.set(marked.parse(response.data) as string);
    })
  }

  generateUnitTests(){
    const latestCode = this.code();
    this.activeButtonSpinner.set('Generate unit tests');

    this.assistant.generateUnitTests(latestCode)
    .pipe(finalize(() => this.activeButtonSpinner.set(null)))
    .subscribe((response: any) => {
      this.result.set(marked.parse(response.data) as string);
    })
  }
}
