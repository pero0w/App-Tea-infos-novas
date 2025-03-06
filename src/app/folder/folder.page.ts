import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html', // Corrigido para o nome correto
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage {
  constructor(private router: Router) {}

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }
}
