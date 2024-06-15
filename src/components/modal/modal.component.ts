import { Component, Inject, ComponentFactoryResolver, ViewChild, ViewContainerRef, AfterViewInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements AfterViewInit {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
  
  ngAfterViewInit() {
    if (this.data.component) {
      const factory = this.resolver.resolveComponentFactory(this.data.component);
      this.container.clear();
      this.container.createComponent(factory);
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
