import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/categoria.model';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RevenuesService } from '../../services/revenues.service';
import { Revenues } from '../../models/revenues.model';
import { ModalComponent } from '../modal/modal.component';
import { CategoriesComponent } from '../categories/categories.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-revenues',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatIconModule],
  templateUrl: './revenues.component.html',
  styleUrl: './revenues.component.css'
})
export class RevenuesComponent {
  categorias: Categoria[] = [];
  revenuesForm: FormGroup;

  constructor(private categoriaService: CategoriaService, private fb: FormBuilder, private RevenuesService: RevenuesService, private dialog: MatDialog) {
    this.revenuesForm = this.fb.group({
      usuario: ['', Validators.required],
      categoria: [null, Validators.required],
      titulo_credito: ['', Validators.required],
      data_entrada: ['', Validators.required],
      valor: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.categoriaService.categorias$.subscribe(categorias => {
      this.categorias = categorias;
    });
  }
  
  onSubmit(): void {
    if (this.revenuesForm.valid) {
      const newRevenues = this.revenuesForm.value as Revenues;
      this.RevenuesService.addRevenues(newRevenues);
      this.revenuesForm.reset();
    }
  }

  
  openModalCategories() {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {title: 'Categorias', component: CategoriesComponent}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
