import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/categoria.model';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})

export class CategoriesComponent implements OnInit {
  categoryForm!: FormGroup;
  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(private fb: FormBuilder, private http: HttpClient, private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      titulo_categoria: ['', [Validators.required, Validators.maxLength(100)]],
      descricao: ['', [Validators.required, Validators.maxLength(250)]],
      tipo: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      const formData =  this.categoryForm.value;
      const novaCategoria = formData as Categoria;
      
      this.categoriaService.adicionarCategoria(novaCategoria);

      this.categoryForm.reset();
      if (this.fileInput) {
        this.fileInput.nativeElement.value = '';
      }
    }
  }
}


