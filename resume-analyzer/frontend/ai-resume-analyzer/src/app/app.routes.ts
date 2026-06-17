import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    redirectTo: 'resume-analyzer',
    pathMatch: 'full'
},
{
    path: 'resume-analyzer',
    loadComponent: () => import('./features/resume-analyzer/page/resume-upload/resume-upload').then(m => m.ResumeUpload)
}

];
