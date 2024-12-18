import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

  title = 'lista_produtos';

  produtos: string[] = [];
  novoProduto: string = '';

  addProduto(){
    if(this.novoProduto.trim()){
       this.produtos.push(this.novoProduto.trim());
       this.novoProduto = '';
    }
  }

  deleteProduto(index: number){
    this.produtos.splice(index, 1);
  }

}
